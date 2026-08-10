import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { randomInt, randomUUID } from 'crypto';

@Injectable()
export class TokenService {
  constructor(private prisma: PrismaService) {}

  async generateTwoFactorToken(email: string) {
    const token = randomInt(100000, 1000000).toString();
    const expires = new Date(new Date().getTime() + 15 * 60 * 1000); // 15 minutes

    const existingToken = await this.prisma.twoFactorToken.findFirst({
      where: { email },
    });

    if (existingToken) {
      await this.prisma.twoFactorToken.delete({
        where: { id: existingToken.id },
      });
    }

    const twoFactorToken = await this.prisma.twoFactorToken.create({
      data: { email, token, expires },
    });

    return twoFactorToken;
  }

  async generatePasswordResetToken(email: string) {
    const token = randomUUID();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await this.prisma.passwordResetToken.findFirst({
      where: { email },
    });

    if (existingToken) {
      await this.prisma.passwordResetToken.delete({
        where: { id: existingToken.id },
      });
    }

    const passwordResetToken = await this.prisma.passwordResetToken.create({
      data: { email, token, expires },
    });

    return passwordResetToken;
  }

  async generateVerificationToken(email: string) {
    const token = randomUUID();
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await this.prisma.verificationToken.findFirst({
      where: { email },
    });

    if (existingToken) {
      await this.prisma.verificationToken.delete({
        where: { id: existingToken.id },
      });
    }

    const verificationToken = await this.prisma.verificationToken.create({
      data: { email, token, expires },
    });

    return verificationToken;
  }
}
