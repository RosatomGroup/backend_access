import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { PasswordResetService } from '../password-reset/password-reset.service';
import { MailService } from '../mail/mail.service';
import { UserService } from '../users/user.service';
import { Response } from 'express';
import { PrismaService } from '../prisma/prisma.service';
import { Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { TokenService } from '../token/token.service';

export interface AuthPayload {
  userId: number;
  email: string;
}
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private prisma: PrismaService,
    private tokenService: TokenService,
  ) {}

  @Post('login')
  async login(
    @Body() dto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = await this.authService.validateUser(dto.email, dto.password);
    const { accessToken, refreshToken } = await this.authService.login(
      user,
      dto.rememberMe,
    );
    const commonOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as const,
    };

    res.cookie('accessToken', accessToken, {
      ...commonOptions,
      ...(dto.rememberMe ? { maxAge: 15 * 60 * 1000 } : {}),
    });

    res.cookie('refreshToken', refreshToken, {
      ...commonOptions,
      ...(dto.rememberMe ? { maxAge: 7 * 24 * 60 * 60 * 1000 } : {}),
    });
    return { message: 'Вход выполнен' };
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  async getMe(@Req() req: Request & { user?: AuthPayload }) {
    if (!req.user) {
      throw new UnauthorizedException('User not found');
    }

    return { userId: req.user.userId, email: req.user.email };
  }

  @Post('logout')
  async logout(
    @Req() req: Request & { user?: AuthPayload },
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken = req.cookies?.refreshToken;

    if (refreshToken) {
      try {
        const payload =
          await this.tokenService.verifyRefreshToken(refreshToken);
        await this.prisma.refreshToken.deleteMany({
          where: { userId: payload.userId },
        });
      } catch (e) {
        console.warn('Refresh token invalid or expired');
      }
    }

    const cookieOptions = {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production',
      secure: false,
      sameSite: 'strict' as const,
      path: '/',
    };

    res.clearCookie('accessToken', cookieOptions);
    res.clearCookie('refreshToken', cookieOptions);

    return { message: 'Вы вышли из системы' };
  }
}
