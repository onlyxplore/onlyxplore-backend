import { ConfigService } from '@nestjs/config';
export declare class MailService {
    private configService;
    private transporter;
    private fromAddress;
    private frontendUrl;
    constructor(configService: ConfigService);
    sendTwoFactorTokenEmail(email: string, token: string): Promise<void>;
    sendPasswordResetEmail(email: string, token: string): Promise<void>;
    sendVerificationEmail(email: string, token: string): Promise<void>;
}
