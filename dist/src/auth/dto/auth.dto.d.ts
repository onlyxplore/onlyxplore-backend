import { UserRole } from '../../generated/prisma/enums';
export declare class RegisterDto {
    email: string;
    name: string;
    password: string;
    role?: UserRole;
}
export declare class LoginDto {
    email: string;
    password: string;
    code?: string;
}
export declare class ResetPasswordDto {
    email: string;
}
export declare class NewPasswordDto {
    password: string;
    token: string;
}
export declare class VerifyEmailDto {
    token: string;
}
export declare class UpdateSettingsDto {
    name?: string;
}
export declare class GoogleLoginDto {
    email: string;
    name: string;
    image?: string;
    providerAccountId: string;
    role?: UserRole;
}
