import { Controller, Post, Body } from '@nestjs/common';
import { PasswordResetService } from './password-reset.service';

@Controller('reset')
export class PasswordResetController {
  constructor(private readonly passwordResetService: PasswordResetService) {}

  @Post('request')
  async requestReset(
    @Body('email') email: string,
  ): Promise<{ message: string }> {
    await this.passwordResetService.requestPasswordReset(email);
    return { message: 'Password reset email sent' };
  }
}
