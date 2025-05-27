// import {
//   Body,
//   Controller,
//   Get,
//   Param,
//   ParseIntPipe,
//   Post,
//   Put,
//   Patch,
//   UnauthorizedException, ForbiddenException
// } from '@nestjs/common';
// import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
// import { UserService } from './user.service';

// @Controller('users')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post('register')
//   async register(@Body() createUserDto: CreateUserDto) {
//     return this.userService.createUser(createUserDto);
//   }

//   @Put(':id')
//   async updateUser(
//     @Param('id', ParseIntPipe) id: number,
//     @Body() updateUserDto: UpdateUserDto,
//   ) {
//     return this.userService.updateUser(id, updateUserDto);
//   }

//   @Get()
//   async getAll() {
//     return this.userService.getAllUsers();
//   }
// }


// @Patch(':id')
//   async partialUpdateUser(
//     @CurrentUser() currentUser: { id: number; role?: UserRole },
//     @Param('id', ParseIntPipe) targetUserId: number,
//     @Body() updateUserDto: UpdateUserDto,
//   ) {
//     if (!currentUser) {
//       throw new UnauthorizedException('User not authenticated');
//     }

//     if (currentUser.id !== targetUserId && currentUser.role !== UserRole.ADMIN) {
//       throw new ForbiddenException('You can only update your own profile');
//     }

//     return this.userService.partialUpdateUser(targetUserId, updateUserDto);
//   }

import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Patch,
  UseGuards,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { AccessLevel } from '../auth/enums/user-role.enum';

@Controller('users')
@UseGuards(AuthGuard('jwt')) // Защищаем все роуты контроллера
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

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

    if (currentUser.id !== targetUserId && currentUser.accessLevel !== AccessLevel.ADMIN) {
      throw new ForbiddenException('You can only update your own profile');
    }
  }
}