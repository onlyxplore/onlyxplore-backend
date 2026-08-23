import { Injectable, Inject, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;
  private resend: Resend | null = null;
  private fromAddress: string;
  private frontendUrl: string;
  private logger = new Logger(MailService.name);

  constructor(@Inject(ConfigService) private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: this.configService.get<number>('SMTP_PORT') || 587,
      secure: false,
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
    });

    const resendKey = this.configService.get<string>('RESEND_API_KEY');
    if (resendKey) {
      this.resend = new Resend(resendKey);
    }

    this.fromAddress = `"OnlyXplore" <${this.configService.get<string>('SMTP_FROM')}>`;
    const rawFrontendUrl =
      this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';
    this.frontendUrl = rawFrontendUrl.split(',')[0].trim();
  }

  private async sendEmail(
    to: string,
    subject: string,
    html: string,
  ): Promise<void> {
    if (this.resend) {
      try {
        const isTestingGmail = this.fromAddress.includes('gmail.com');
        const resendFrom = isTestingGmail
          ? 'onboarding@resend.dev'
          : this.fromAddress;

        const { error } = await this.resend.emails.send({
          from: resendFrom,
          to,
          subject,
          html,
        });

        if (!error) {
          this.logger.log(`Email sent successfully to ${to} via Resend`);
          return;
        }

        this.logger.warn(
          `Resend failed, falling back to SMTP: ${error.message}`,
        );
      } catch (e: unknown) {
        this.logger.warn(
          `Resend exception, falling back to SMTP: ${(e as Error).message}`,
        );
      }
    }

    try {
      await this.transporter.sendMail({
        from: this.fromAddress,
        to,
        subject,
        html,
      });
      this.logger.log(`Email sent successfully to ${to} via SMTP fallback`);
    } catch (e: unknown) {
      this.logger.error(`SMTP fallback failed: ${(e as Error).message}`);
      throw e;
    }
  }

  async sendTwoFactorTokenEmail(email: string, token: string): Promise<void> {
    await this.sendEmail(
      email,
      '2FA Code',
      `<p>Your 2FA code : <b>${token}</b></p>`,
    );
  }

  async sendPasswordResetEmail(
    email: string,
    token: string,
    origin?: string,
  ): Promise<void> {
    const baseUrl = origin || this.frontendUrl;
    const resetLink = `${baseUrl}/new-password?token=${token}`;

    await this.sendEmail(
      email,
      'Reset your password',
      `<p>Click <a href="${resetLink}">here</a> to reset your password</p>`,
    );
  }

  async sendVerificationEmail(
    email: string,
    token: string,
    origin?: string,
  ): Promise<void> {
    const baseUrl = origin || this.frontendUrl;
    const confirmLink = `${baseUrl}/new-verification?token=${token}`;

    await this.sendEmail(
      email,
      'Confirm your email',
      `<p>Click <a href="${confirmLink}">here</a> to confirm your email</p>`,
    );
  }
}
