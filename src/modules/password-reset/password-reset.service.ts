import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { MailService } from '../mail/mail.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordResetService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async requestPasswordReset(email: string): Promise<void> {
    email = email.toLowerCase();
    const token = uuidv4();
    await this.prisma.passwordResetToken.deleteMany({
      where: { email: { equals: email, mode: 'insensitive' } },
    });
    await this.prisma.passwordResetToken.create({
      data: {
        email,
        token,
        expiresAt: new Date(Date.now() + 3600000),
      },
    });

    await this.mailService.sendPasswordResetEmail(email, token);
  }
  async createToken(email: string): Promise<string> {
    email = email.toLowerCase();
    const token = uuidv4();

    await this.prisma.passwordResetToken.deleteMany({
      where: { email },
    });

    await this.prisma.passwordResetToken.create({
      data: {
        email,
        token,
        expiresAt: new Date(Date.now() + 3600000),
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
      await this.prisma.passwordResetToken.delete({
        where: { token },
      });
    } catch (error) {
      console.error('Error deleting token:', error);
    }
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    const record = await this.prisma.passwordResetToken.findUnique({
      where: { token },
    });

    if (!record) {
      throw new BadRequestException('Недействительный или истёкший токен');
    }

    if (new Date() > record.expiresAt) {
      throw new BadRequestException('Недействительный или истёкший токен');
    }
    const email = record.email.toLowerCase();
    const user = await this.prisma.user.findFirst({
      where: { email: { equals: email, mode: 'insensitive' } },
    });

    if (!user) throw new NotFoundException('Пользователь не найден');

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.prisma.user.update({
      where: { email: user.email },
      data: { password: hashedPassword },
    });

    await this.deleteToken(token);
  }
}
