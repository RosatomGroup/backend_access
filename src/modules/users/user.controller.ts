import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ForbiddenException,
  Post,
  Patch,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../auth/enums/user-role.enum';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('users')

export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }


  // @Patch(':id/role')
  // @Roles(UserRole.ADMIN) // Только админы могут менять роли
  // async updateUserRole(
  //   @Param('id', ParseIntPipe) userId: number,
  //   @Body('role') newRole: UserRole,
  // ) {
  //   return this.userService.updateUserRole(userId, newRole);
  // }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id/role')
  @Roles(UserRole.ADMIN)
  async updateUserRole(
    @CurrentUser() currentUser: { id: number, role: UserRole },
    @Param('id', ParseIntPipe) targetUserId: number,
    @Body('role') newRole: UserRole,
  ) {
    // Дополнительная проверка, что нельзя изменить свою роль
    if (currentUser.id === targetUserId) {
      throw new ForbiddenException('You cannot change your own role');
    }

    return this.userService.updateUserRole(targetUserId, newRole);
  }
  

  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ADMIN)
  @Patch(':id')
  async partialUpdateUser(
    @CurrentUser() currentUser: { id: number; role?: UserRole },
    @Param('id', ParseIntPipe) targetUserId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (!currentUser) {
      throw new UnauthorizedException('User not authenticated');
    }

    if (currentUser.id !== targetUserId && currentUser.role !== UserRole.ADMIN) {
      throw new ForbiddenException('You can only update your own profile');
    }

    return this.userService.updateUser(targetUserId, updateUserDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get()
  async getAll(@CurrentUser() currentUser: { id: number, role: UserRole }) {
    console.log(`Admin access granted to user ${currentUser.id} with role ${currentUser.role}`);
    return this.userService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @Get('management')
  async getUsersForManagement() {
    return this.userService.getUsersForManagement();
  }
}