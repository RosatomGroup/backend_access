import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  // UnauthorizedException,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Post('login')
  // async login(@Body() loginUserDto: LoginUserDto) {
  //   const user = await this.authService.validateUser(
  //     loginUserDto.email,
  //     loginUserDto.password,
  //   );
  //   if (!user) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }
  //   return this.authService.login(user);
  // }

  // @Post('/logout')
  // async logout(@Request() req) {
  //     return req.logout();
  // }
  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    try {
      const user = await this.authService.validateUser(dto.email, dto.password);
      const token = await this.authService.login(user);
      return { access_token: token };
    } catch (error) {
      throw new HttpException(
        error.message || 'Authorization failed',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
