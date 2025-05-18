import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { PasswordResetService } from '../password-reset/password-reset.service';
import { MailService } from '../mail/mail.service';
import { UserService } from '../users/user.service';
import { ForgotPasswordDto } from '../password-reset/dto/forgot-password.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private passwordResetService: PasswordResetService,
    private mailService: MailService,
    private userService: UserService,
  ) {}

  // @Post('/logout')
  // async logout(@Request() req) {
  //     return req.logout();
  // }
  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    try {
      const user = await this.authService.validateUser(dto.email, dto.password);
      if (!user) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
      const token = await this.authService.login(user);
      return { access_token: token };
    } catch (error) {
      throw new HttpException(
        error.message || 'Authorization failed',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  @Post('forgot-password')
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    try {
      const user = await this.userService.findByEmail(dto.email);
      if (!user) {
        return {
          success: true,
          message: 'If the email exists, a reset link has been sent',
        };
      }

      const token = await this.passwordResetService.createToken(
        user.id.toString(),
      );
      await this.mailService.sendPasswordResetEmail(user.email, token);

      return {
        success: true,
        message: 'Password reset link has been sent to your email',
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to process password reset request',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('reset-password')
  async resetPassword(
    @Body('token') token: string,
    @Body('newPassword') newPassword: string,
  ) {
    const { valid, email } =
      await this.passwordResetService.validateToken(token);

    if (!valid || !email) {
      throw new HttpException(
        'Неверный или просроченный токен',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.userService.updatePassword(email, newPassword);
    await this.passwordResetService.deleteToken(token);
    return { message: 'Пароль успешно изменён' };
  }
}
