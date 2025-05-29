import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Put,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { AccessLevel } from '../auth/enums/user-role.enum';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard) // Защищаем все роуты контроллера
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put(':id')
  async updateUser(
    @CurrentUser() currentUser: { id: number; accessLevel: AccessLevel },
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    this.validateUserAccess(currentUser, id);
    return this.userService.updateUser(id, updateUserDto);
  }

  @Patch(':id')
  async partialUpdateUser(
    @CurrentUser() currentUser: { id: number; accessLevel: AccessLevel },
    @Param('id', ParseIntPipe) targetUserId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    this.validateUserAccess(currentUser, targetUserId);
    return this.userService.partialUpdateUser(targetUserId, updateUserDto);
  }

  @Get()
  async getAll() {
    return this.userService.getAllUsers();
  }

  private validateUserAccess(
    currentUser: { id: number; accessLevel: AccessLevel },
    targetUserId: number,
  ) {
    if (!currentUser) {
      throw new UnauthorizedException('User not authenticated');
    }

    if (
      currentUser.id !== targetUserId &&
      currentUser.accessLevel !== AccessLevel.ADMIN
    ) {
      throw new ForbiddenException(
        'Вы не админ! Вам доступно обновление только вашего профиля',
      );
    }
  }
}
