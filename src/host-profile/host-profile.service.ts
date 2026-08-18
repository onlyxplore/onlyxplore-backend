import { Injectable, Logger, ConflictException, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateHostProfileDto } from './dto/update-host-profile.dto';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class HostProfileService {
  private readonly logger = new Logger(HostProfileService.name);

  constructor(
    @Inject(PrismaService) private prisma: PrismaService,
    @Inject(SupabaseService) private supabaseService: SupabaseService,
  ) {}

  async getProfile(userId: string) {
    return this.prisma.hostProfile.findUnique({
      where: { userId },
    });
  }

  async upsertProfile(userId: string, data: UpdateHostProfileDto) {
    try {
      if (data.profilePhoto && data.profilePhoto.startsWith('data:image')) {
        this.logger.log(`Uploading profile photo for user ${userId}`);
        data.profilePhoto = await this.supabaseService.uploadBase64Image(
          data.profilePhoto,
          'uploads',
          'avatars',
        );
      }

      if (data.logo && data.logo.startsWith('data:image')) {
        this.logger.log(`Uploading logo for user ${userId}`);
        data.logo = await this.supabaseService.uploadBase64Image(
          data.logo,
          'uploads',
          'logo',
        );
      }
    } catch (e) {
      const error = e as Error;
      this.logger.error(`Failed to upload images: ${error.message}`);
      throw error;
    }

    // Convert empty string username to null to prevent unique constraint errors on empty strings
    const updateData = { ...data };
    if (updateData.username === '') {
      updateData.username = null as unknown as string;
    }

    try {
      // Update the user's role to HOST when they create/update their profile
      await this.prisma.user.update({
        where: { id: userId },
        data: { role: 'HOST' },
      });

      return await this.prisma.hostProfile.upsert({
        where: { userId },
        update: updateData,
        create: {
          userId,
          ...updateData,
        },
      });
    } catch (e) {
      const error = e as { code?: string };
      if (error.code === 'P2002') {
        throw new ConflictException('Username is already taken');
      }
      throw e;
    }
  }
}
