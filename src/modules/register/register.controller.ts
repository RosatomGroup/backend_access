import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterDto } from './dto/create-register.dto';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorator';

@Controller('auth')
@UseGuards(JwtAuthGuard) // Защищаем все роуты контроллера
export class RegisterController {
  RegisterService: any;
  constructor(private readonly registerService: RegisterService) {}

  @Public()
  @Post('register')
  async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user, accessToken, refreshToken } =
      await this.registerService.registerUser(dto);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 15 * 60 * 1000,
    });

    return { message: 'Регистрация успешна' };
  }
}
