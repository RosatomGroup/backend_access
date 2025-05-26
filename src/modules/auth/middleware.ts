import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { TokenService } from '../token/token.service';

@Injectable()
export class RefreshTokenMiddleware implements NestMiddleware {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
    private configService: ConfigService,
    private tokenService: TokenService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if (req.path === '/auth/logout') {
      return next();
    }

    if (!req.cookies) {
      return next();
    }

    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      return next();
    }

    try {
      const payload = await this.tokenService.verifyRefreshToken(refreshToken);
      const tokenExists = await this.prisma.refreshToken.findFirst({
        where: { token: refreshToken, userId: payload.userId },
      });

      if (tokenExists) {
        const newAccessToken = await this.jwtService.signAsync(
          {
            email: payload.email,
            sub: payload.userId,
          },
          {
            secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
            expiresIn:
              this.configService.get<string>('JWT_ACCESS_EXPIRES_IN') || '15m',
          },
        );

        const cookieOptions = {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict' as const,
          ...(payload.rememberMe ? { maxAge: 15 * 60 * 1000 } : {}),
        };

        res.cookie('accessToken', newAccessToken, cookieOptions);
        req.cookies.accessToken = newAccessToken;
      }
    } catch (e) {
      console.error('Refresh token invalid or expired:', e.message);
    }

    next();
  }
}
