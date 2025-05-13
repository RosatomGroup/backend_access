import { Body, Controller, Post } from '@nestjs/common';
// import { CreateRegisterDto } from './dto/create-register.dto';
import { RegisterService } from './register.service';
import { RegisterDto } from './dto/create-register.dto';

@Controller('auth')
export class RegisterController {
  RegisterService: any;
  constructor(private readonly registerService: RegisterService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.registerService.registerUser(dto);
  }
}
