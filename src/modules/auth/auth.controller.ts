import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { Request, Response } from 'express';
import { PrismaService } from '../prisma/prisma.service';
import { AuthGuard } from '@nestjs/passport';
import { TokenService } from '../token/token.service';
import { CurrentUser } from './decorators/current-user.decorator';

export interface AuthPayload {
  userId: number;
  email: string;
  accessLevel: string;
  avatarUrl: string;
}
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private prisma: PrismaService,
    private tokenService: TokenService,
  ) { }

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
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatarUrl: user.avatarUrl,
        accessLevel: user.accessLevel,
      },
      message: 'Вход выполнен',
    };
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  async getMe(@CurrentUser() user: AuthPayload) {
    if (!user || !user.userId) {
      throw new UnauthorizedException('Пользователь не аутентифицирован или его ID отсутствует.');
    }

    const fullUser = await this.prisma.user.findUnique({
      where: {
        id: user.userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
        surname: true,
        middleName: true,
        accessLevel: true,
        phone: true,
        avatarUrl: true,
        birthDate: true,
        subdivision: true,
        rang: true,
      },
    });

    if (!fullUser) {
      throw new UnauthorizedException('Данные пользователя не найдены в базе данных.');
    }

    return fullUser;
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
