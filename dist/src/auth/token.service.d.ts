import { PrismaService } from '../prisma/prisma.service';
export declare class TokenService {
    private prisma;
    constructor(prisma: PrismaService);
    generateTwoFactorToken(email: string): Promise<{
        id: string;
        email: string;
        token: string;
        expires: Date;
    }>;
    generatePasswordResetToken(email: string): Promise<{
        id: string;
        email: string;
        token: string;
        expires: Date;
    }>;
    generateVerificationToken(email: string): Promise<{
        id: string;
        email: string;
        token: string;
        expires: Date;
    }>;
}
