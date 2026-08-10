import { Module } from '@nestjs/common';
import { HostProfileService } from './host-profile.service';
import { HostProfileController } from './host-profile.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [PrismaModule, SupabaseModule],
  controllers: [HostProfileController],
  providers: [HostProfileService],
})
export class HostProfileModule {}
