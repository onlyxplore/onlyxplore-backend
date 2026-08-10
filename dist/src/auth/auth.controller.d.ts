import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, ResetPasswordDto, NewPasswordDto, VerifyEmailDto, UpdateSettingsDto, GoogleLoginDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
    getMe(req: {
        user: {
            id: string;
        };
    }): Promise<{
        id: string;
        name: string | null;
        email: string | null;
        emailVerified: Date | null;
        image: string | null;
        role: import("../generated/prisma/enums").UserRole;
        isTwoFactorEnabled: boolean;
    }>;
    updateSettings(req: {
        user: {
            id: string;
        };
    }, dto: UpdateSettingsDto): Promise<{
        success: string;
    }>;
}
