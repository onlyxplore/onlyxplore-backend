import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;
  private fromAddress: string;
  private frontendUrl: string;

  constructor(private configService: ConfigService) {
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

    this.fromAddress = `"OnlyXplore" <${this.configService.get<string>('SMTP_FROM')}>`;
    this.frontendUrl =
      this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';
  }

  async sendTwoFactorTokenEmail(email: string, token: string): Promise<void> {
    await this.transporter.sendMail({
      from: this.fromAddress,
      to: email,
      subject: '2FA Code',
      html: `<p>Your 2FA code : <b>${token}</b></p>`,
    });
  }

  async sendPasswordResetEmail(email: string, token: string): Promise<void> {
    const resetLink = `${this.frontendUrl}/auth/new-password?token=${token}`;

    await this.transporter.sendMail({
      from: this.fromAddress,
      to: email,
      subject: 'Reset your password',
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password</p>`,
    });
  }

  async sendVerificationEmail(email: string, token: string): Promise<void> {
    const confirmLink = `${this.frontendUrl}/auth/new-verification?token=${token}`;

    await this.transporter.sendMail({
      from: this.fromAddress,
      to: email,
      subject: 'Confirm your email',
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email</p>`,
    });
  }
}
