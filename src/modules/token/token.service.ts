import { Injectable } from '@nestjs/common';
import { AccessTokenService } from './strategies/access-token.service';
import { RefreshTokenService } from './strategies/refresh-token.service';
import { PrismaService } from '../prisma/prisma.service';
import { AccessLevel } from '../auth/enums/user-role.enum';

interface GenerateTokensParams {
  userId: number;
  email: string;
  isVerified?: boolean;
  rememberMe: boolean;
  accessLevel: AccessLevel;
}

@Injectable()
export class TokenService {
  constructor(
    private readonly accessTokenService: AccessTokenService,
    private readonly refreshTokenService: RefreshTokenService,
    private readonly prisma: PrismaService,
  ) {}

  async generateTokens(payload: GenerateTokensParams) {
    const accessToken = await this.accessTokenService.sign(
      payload.userId,
      payload.email,
      payload.accessLevel,
    );
    const refreshToken = await this.refreshTokenService.sign(
      payload.userId,
      payload.email,
      payload.rememberMe,
      payload.accessLevel,
    );
    return { accessToken, refreshToken };
  }

  async verifyRefreshToken(token: string) {
    return this.refreshTokenService.verify(token);
  }

  async verifyAccessToken(token: string) {
    return this.accessTokenService.verify(token);
  }
}