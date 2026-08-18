import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import { TokenService } from './token.service';
import * as bcrypt from 'bcryptjs';
import {
  RegisterDto,
  LoginDto,
  ResetPasswordDto,
  NewPasswordDto,
  VerifyEmailDto,
  UpdateSettingsDto,
  GoogleLoginDto,
} from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mailService: MailService,
    private tokenService: TokenService,
  ) {}

  // ─── REGISTER ───────────────────────────────────────────
  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: { id: true },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
        role: dto.role || 'USER',
      },
    });

    const verificationToken = await this.tokenService.generateVerificationToken(
      dto.email,
    );

    await this.mailService.sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );

    return { success: 'Confirmation email sent' };
  }

  // ─── LOGIN ──────────────────────────────────────────────
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        password: true,
        role: true,
        isTwoFactorEnabled: true,
        image: true,
      },
    });

    if (!user || !user.email || !user.password) {
      throw new UnauthorizedException('Email does not exist!');
    }

    const passwordMatch = await bcrypt.compare(dto.password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid password!');
    }

    // Check email verification
    if (!user.emailVerified) {
      const verificationToken =
        await this.tokenService.generateVerificationToken(user.email);
      await this.mailService.sendVerificationEmail(
        verificationToken.email,
        verificationToken.token,
      );
      return { success: 'Confirmation email sent!' };
    }

    // Handle 2FA
    if (user.isTwoFactorEnabled && user.email) {
      if (dto.code) {
        // Verify 2FA code
        const twoFactorToken = await this.prisma.twoFactorToken.findFirst({
          where: { email: user.email },
        });

        if (!twoFactorToken) {
          throw new BadRequestException('Invalid Code');
        }

        if (twoFactorToken.token !== dto.code) {
          throw new BadRequestException('Invalid Code');
        }

        const hasExpired = new Date(twoFactorToken.expires) < new Date();
        if (hasExpired) {
          throw new BadRequestException('Code expired!');
        }

        await this.prisma.twoFactorToken.delete({
          where: { id: twoFactorToken.id },
        });

        const existingConfirmation =
          await this.prisma.twoFactorConfirmation.findUnique({
            where: { userId: user.id },
          });

        if (existingConfirmation) {
          await this.prisma.twoFactorConfirmation.delete({
            where: { id: existingConfirmation.id },
          });
        }

        await this.prisma.twoFactorConfirmation.create({
          data: { userId: user.id },
        });
      } else {
        // Send 2FA code
        const twoFactorToken = await this.tokenService.generateTwoFactorToken(
          user.email,
        );
        await this.mailService.sendTwoFactorTokenEmail(
          twoFactorToken.email,
          twoFactorToken.token,
        );
        return { twoFactor: true };
      }
    }

    // Generate JWT
    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      isTwoFactorEnabled: user.isTwoFactorEnabled,
      image: user.image,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isTwoFactorEnabled: user.isTwoFactorEnabled,
        image: user.image,
      },
    };
  }

  // ─── GOOGLE LOGIN ─────────────────────────────────────────
  async googleLogin(dto: GoogleLoginDto) {
    let user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email: dto.email,
          name: dto.name,
          image: dto.image,
          emailVerified: new Date(),
          role: dto.role || 'USER',
        },
      });
    } else {
      if (!user.image && dto.image) {
        await this.prisma.user.update({
          where: { id: user.id },
          data: { image: dto.image },
        });
        user.image = dto.image;
      }
    }

    const existingAccount = await this.prisma.account.findUnique({
      where: {
        provider_providerAccountId: {
          provider: 'google',
          providerAccountId: dto.providerAccountId,
        },
      },
    });

    if (!existingAccount) {
      await this.prisma.account.create({
        data: {
          userId: user.id,
          type: 'oauth',
          provider: 'google',
          providerAccountId: dto.providerAccountId,
        },
      });
    }

    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      isTwoFactorEnabled: user.isTwoFactorEnabled,
      image: user.image,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isTwoFactorEnabled: user.isTwoFactorEnabled,
        image: user.image,
      },
    };
  }

  // ─── VERIFY EMAIL ───────────────────────────────────────
  async verifyEmail(dto: VerifyEmailDto) {
    if (!dto.token) {
      throw new BadRequestException('Token is required!');
    }

    const existingToken = await this.prisma.verificationToken.findUnique({
      where: { token: dto.token },
    });

    if (!existingToken) {
      throw new BadRequestException('Token does not exist!');
    }

    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
      await this.prisma.verificationToken.delete({
        where: { id: existingToken.id },
      });
      throw new BadRequestException('Token has expired!');
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: existingToken.email },
      select: { id: true },
    });

    if (!existingUser) {
      throw new BadRequestException('Email does not exist!');
    }

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: existingUser.id },
        data: {
          emailVerified: new Date(),
          email: existingToken.email,
        },
      }),
      this.prisma.verificationToken.delete({
        where: { id: existingToken.id },
      }),
    ]);

    return { success: 'Email verified successfully!' };
  }

  // ─── RESET PASSWORD (request) ──────────────────────────
  async resetPassword(dto: ResetPasswordDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: { id: true },
    });

    if (!existingUser) {
      throw new BadRequestException('Email not found!');
    }

    const passwordResetToken =
      await this.tokenService.generatePasswordResetToken(dto.email);
    await this.mailService.sendPasswordResetEmail(
      passwordResetToken.email,
      passwordResetToken.token,
    );

    return { success: 'Reset email sent!' };
  }

  // ─── NEW PASSWORD ──────────────────────────────────────
  async newPassword(dto: NewPasswordDto) {
    if (!dto.token) {
      throw new BadRequestException('Token is missing!');
    }

    const existingToken = await this.prisma.passwordResetToken.findUnique({
      where: { token: dto.token },
    });

    if (!existingToken) {
      throw new BadRequestException('Invalid token!');
    }

    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
      throw new BadRequestException('Token is no longer active!');
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: existingToken.email },
      select: { id: true },
    });

    if (!existingUser) {
      throw new BadRequestException('Email does not exist!');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    await this.prisma.user.update({
      where: { id: existingUser.id },
      data: { password: hashedPassword },
    });

    await this.prisma.passwordResetToken.delete({
      where: { id: existingToken.id },
    });

    return { success: 'Password Updated!' };
  }

  // ─── GET CURRENT USER ──────────────────────────────────
  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        role: true,
        isTwoFactorEnabled: true,
        image: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return user;
  }

  // ─── UPDATE SETTINGS ───────────────────────────────────
  async updateSettings(userId: string, dto: UpdateSettingsDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });

    if (!user) {
      throw new UnauthorizedException('Unauthorized');
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: { ...dto },
    });

    return { success: 'Updated' };
  }

  // ─── VALIDATE USER BY ID (for JWT strategy) ────────────
  async validateUserById(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isTwoFactorEnabled: true,
        image: true,
      },
    });

    return user;
  }
}
