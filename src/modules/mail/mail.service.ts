import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: Transporter;

  constructor() {
    const { EMAIL_USER, EMAIL_PASSWORD, FRONTEND_URL } = process.env;

    if (!EMAIL_USER || !EMAIL_PASSWORD || !FRONTEND_URL) {
      throw new Error('Missing environment variables for email configuration');
    }

    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    this.transporter.verify((error) => {
      if (error) {
        console.error('Error verifying email transporter:', error);
        throw new Error('Failed to configure email transporter');
      }
    });
  }

  async sendPasswordResetEmail(email: string, token: string): Promise<void> {
    try {
      const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${encodeURIComponent(token)}`;

      await this.transporter.sendMail({
        from:
          process.env.EMAIL_FROM || `"No Reply" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Запрос сброса пароля',
        html: `
          <p>Вы запросили сброс пароля. Перейдите по ссылке ниже, чтобы сбросить пароль.</p>
          <a href="${resetUrl}">Сброс пароля</a>
          <p>Эта ссылка станет недействительной через 1 час.</p>
        `,
      });
    } catch (error) {
      console.error('Failed to send email:', error.message || error);
      throw new InternalServerErrorException(
        'Failed to send password reset email',
      );
    }
  }
}
