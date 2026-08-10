import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import { TokenService } from './token.service';
import { RegisterDto, LoginDto, ResetPasswordDto, NewPasswordDto, VerifyEmailDto, UpdateSettingsDto, GoogleLoginDto } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    private mailService;
    private tokenService;
    constructor(prisma: PrismaService, jwtService: JwtService, mailService: MailService, tokenService: TokenService);
    register(dto: RegisterDto): Promise<{
        success: string;
    }>;
    login(dto: LoginDto): Promise<{
        success: string;
        twoFactor?: undefined;
        accessToken?: undefined;
        user?: undefined;
    } | {
        twoFactor: boolean;
        success?: undefined;
        accessToken?: undefined;
        user?: undefined;
    } | {
        accessToken: string;
        user: {
            id: string;
            name: string | null;
            email: string;
            role: import("../generated/prisma/enums").UserRole;
            isTwoFactorEnabled: boolean;
            image: string | null;
        };
        success?: undefined;
        twoFactor?: undefined;
    }>;
    googleLogin(dto: GoogleLoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            name: string | null;
            email: string | null;
            role: import("../generated/prisma/enums").UserRole;
            isTwoFactorEnabled: boolean;
            image: string | null;
        };
    }>;
    verifyEmail(dto: VerifyEmailDto): Promise<{
        success: string;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        success: string;
    }>;
    newPassword(dto: NewPasswordDto): Promise<{
        success: string;
    }>;
    getMe(userId: string): Promise<{
        id: string;
        name: string | null;
        email: string | null;
        emailVerified: Date | null;
        image: string | null;
        role: import("../generated/prisma/enums").UserRole;
        isTwoFactorEnabled: boolean;
    }>;
    updateSettings(userId: string, dto: UpdateSettingsDto): Promise<{
        success: string;
    }>;
    validateUserById(userId: string): Promise<{
        id: string;
        name: string | null;
        email: string | null;
        image: string | null;
        role: import("../generated/prisma/enums").UserRole;
        isTwoFactorEnabled: boolean;
    } | null>;
}
