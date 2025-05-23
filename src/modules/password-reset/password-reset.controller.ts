import { Controller, Post, Body } from '@nestjs/common';
import { PasswordResetService } from './password-reset.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { PrismaService } from '../prisma/prisma.service';

@Controller('reset')
export class PasswordResetController {
  constructor(
    private readonly passwordResetService: PasswordResetService,
    private readonly prisma: PrismaService,
  ) {}

  @Post('request')
  async requestReset(
    @Body('email') email: string,
  ): Promise<{ message: string }> {
    await this.passwordResetService.requestPasswordReset(email);
    return { message: 'Password reset email sent' };
  }
  @Post('confirm')
  async confirmReset(@Body() dto: ResetPasswordDto) {
    await this.passwordResetService.resetPassword(dto.token, dto.newPassword);
    return { message: 'Password reset successful' };
  }
}
