import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async refreshTokens(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const tokenExists = await this.prisma.refreshToken.findFirst({
        where: { token: refreshToken, userId: payload.userId },
      });

      if (!tokenExists) {
        throw new Error('Invalid refresh token');
      }

      await this.prisma.refreshToken.delete({
        where: { id: tokenExists.id },
      });

      return this.generateTokens(payload.userId, payload.email);
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  async generateTokens(userId: number, email: string) {
    const accessToken = this.jwtService.sign(
      { userId, email },
      {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
        expiresIn:
          this.configService.get<string>('JWT_ACCESS_EXPIRES_IN') || '15m',
      },
    );

    const refreshToken = this.jwtService.sign(
      { userId, email },
      {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
        expiresIn:
          this.configService.get<string>('JWT_REFRESH_EXPIRES_IN') || '7d',
      },
    );

    await this.prisma.accessToken.create({
      data: {
        token: accessToken,
        userId,
        expiresAt: new Date(Date.now() + 15 * 60 * 1000),
      },
    });

    await this.prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}
