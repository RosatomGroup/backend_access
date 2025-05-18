import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { MailService } from '../mail/mail.service';

@Injectable()
export class PasswordResetService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}
  async requestPasswordReset(email: string): Promise<void> {
    const token = uuidv4();
    await this.prisma.passwordResetToken.deleteMany({ where: { email } });
    await this.prisma.passwordResetToken.create({
      data: {
        email,
        token,
        expiresAt: new Date(Date.now() + 3600000), // 1 час
      },
    });

    await this.mailService.sendPasswordResetEmail(email, token);
  }
  async createToken(email: string): Promise<string> {
    const token = uuidv4();

    await this.prisma.passwordResetToken.deleteMany({
      where: { email },
    });

    await this.prisma.passwordResetToken.create({
      data: {
        email,
        token,
        expiresAt: new Date(Date.now() + 3600000), // +1 час
      },
    });

    return token;
  }

  async validateToken(
    token: string,
  ): Promise<{ valid: boolean; email?: string }> {
    try {
      const record = await this.prisma.passwordResetToken.findUnique({
        where: { token },
      });

      if (!record?.email) return { valid: false };

      const valid = new Date() < record.expiresAt;
      if (!valid) await this.deleteToken(token);

      return { valid, email: record.email };
    } catch (error) {
      return { valid: false };
    }
  }

  async deleteToken(token: string): Promise<void> {
    try {
      await this.prisma['passwordResetToken'].delete({
        where: { token },
      });
    } catch (error) {
      console.error('Error deleting token:', error);
    }
  }
}
