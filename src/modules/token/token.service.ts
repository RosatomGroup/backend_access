import { Injectable } from '@nestjs/common';
import { AccessTokenService } from './strategies/access-token.service';
import { RefreshTokenService } from './strategies/refresh-token.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TokenService {
  constructor(
    private accessTokenService: AccessTokenService,
    private refreshTokenService: RefreshTokenService,
    private prisma: PrismaService,
  ) {}

  async generateTokens(userId: number, email: string, rememberMe: boolean) {
    const accessToken = await this.accessTokenService.sign(userId, email);
    const refreshToken = await this.refreshTokenService.sign(
      userId,
      email,
      rememberMe,
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

    return { accessToken, refreshToken };
  }

  async verifyRefreshToken(token: string) {
    return this.refreshTokenService.verify(token);
  }

  async verifyAccessToken(token: string) {
    return this.accessTokenService.verify(token);
  }
}
