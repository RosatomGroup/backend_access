import {
  Body,
  Controller,
  Post,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { UserAuthService } from './services/user-auth.service';
import { UserProfileService } from './services/user-profile.service';
import { CreateUserDto, UpdateUserDto, LoginDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: UserAuthService,
    private readonly userProfileService: UserProfileService,
  ) {}

  /**
   * Регистрация нового пользователя
   * @param createUserDto Данные для регистрации
   * @returns Данные созданного пользователя
   */
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  /**
   * Аутентификация пользователя
   * @param loginDto Учетные данные пользователя
   * @returns JWT токен доступа
   */
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    return this.authService.login(user);
  }

  /**
   * Обновление данных пользователя
   * @param id ID пользователя
   * @param updateUserDto Данные для обновления
   * @returns Обновленные данные пользователя
   */
  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userProfileService.updateUser(id, updateUserDto);
  }
}
