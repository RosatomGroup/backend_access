// import {
//   ConflictException,
//   Injectable,
//   NotFoundException,
//   ForbiddenException 
// } from '@nestjs/common';
// import { UserRole } from '../auth/enums/user-role.enum';
// import {
//   CreateUserDto,
//   ManagementUserDto,
//   ReplyCreateUserDto,
//   UpdateUserDto,
// } from './dto/user.dto';

// import * as bcrypt from 'bcrypt';
// import { Prisma } from '../../../prisma/generated/client';
// import { PrismaService } from '../prisma/prisma.service';

// @Injectable()
// export class UserService {
//   constructor(private readonly prisma: PrismaService) {}

//   async getAllUsers() {
//     return this.prisma.user.findMany();
//   }

//   async updateUserRole(userId: number, newRole: UserRole) {
//     // 1. Проверяем существование пользователя
//     const userExists = await this.prisma.user.findUnique({
//       where: { id: userId },
//       select: { id: true }
//     });

//     if (!userExists) {
//       throw new NotFoundException(`User with ID ${userId} not found`);
//     }

//     // 2. Проверяем валидность роли
//     if (!Object.values(UserRole).includes(newRole)) {
//       throw new ForbiddenException(`Invalid role: ${newRole}`);
//     }

//     // 3. Обновляем ТОЛЬКО enum-поле role_user
//     return this.prisma.user.update({
//       where: { id: userId },
//       data: {
//         role_user: newRole as any
//       },
//       select: {
//         id: true,
//         email: true,
//         role_user: true
//       }
//     });
//   }

//   async updateUser(id: number, updateUserDto: UpdateUserDto) {
//     await this.findById(id);

//     if (updateUserDto.email) {
//       const existingUser = await this.prisma.user.findFirst({
//         where: {
//           email: updateUserDto.email,
//           NOT: { id },
//         },
//       });

//       if (existingUser) {
//         throw new ConflictException('Email already in use by another user');
//       }
//     }

//     const updateData: Prisma.userUpdateInput = {
//       ...(updateUserDto.name && { name: updateUserDto.name }),
//       ...(updateUserDto.surname && { surname: updateUserDto.surname }),
//       ...(updateUserDto.middle_name && { middle_name: updateUserDto.middle_name,}),
//       ...(updateUserDto.subdivision && { subdivision: updateUserDto.subdivision,}),
//       ...(updateUserDto.email && { email: updateUserDto.email }),
//       ...(updateUserDto.rang && { rang: updateUserDto.rang }),
//     };

//     try {
//       const updatedUser = await this.prisma.user.update({
//         where: { id },
//         data: updateData,
//       });

//       return {
//         key: updatedUser.id.toString(),
//         name: [updatedUser.surname, updatedUser.name, updatedUser.middle_name]
//           .filter(Boolean)
//           .join(' '),
//         rang: updatedUser.role_id || 'Не указана',
//         subdivision: updatedUser.subdivision || 'Не указано',
//         email: updatedUser.email,
//       };
//     } catch (error) {
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//       throw new Error(`Failed to update user: ${error.message}`);
//     }
//   }

//   async getUsersForManagement(): Promise<ManagementUserDto[]> {
//     const users = await this.prisma.user.findMany();

//     return users.map((user) => ({
//       key: user.id,
//       name: `${user.surname} ${user.name} ${user.middle_name || ''}`.trim(),
//       rang: user.role_id?.toString() || 'Не указана',
//       subdivision: 'Не указано', //user.subdivision || 'Не указано'
//       address: user.email,
//     }));
//   }

//   async createUser(createUserDto: CreateUserDto): Promise<ReplyCreateUserDto> {
//     const existingUser = await this.findByEmail(createUserDto.email);

//     if (existingUser) {
//       throw new ConflictException('Пользователь с таким email уже существует');
//     }
//     const hashedPassword: string = await bcrypt.hash(
//       createUserDto.password,
//       10,
//     );
//     const user = await this.prisma.user.create({
//       data: {
//         email: createUserDto.email,
//         password: hashedPassword,
//       },
//     });
//     const userReplyDto: ReplyCreateUserDto = {
//       id: user.id,
//       email: user.email,
//     };

//     return userReplyDto;
//   }

//   async findByEmail(email: string) {
//     return this.prisma.user.findUnique({
//       where: { email },
//     });
//   }

//   private async findById(id: number) {
//     const user = await this.prisma.user.findUnique({
//       where: { id },
//     });

//     if (!user) {
//       throw new NotFoundException(`User with ID ${id} not found`);
//     }
//     return user;
//   }
  
// }


import {
  ConflictException,
  Injectable,
  NotFoundException,
  ForbiddenException 
} from '@nestjs/common';
import { UserRole } from '../auth/enums/user-role.enum';
import {
  CreateUserDto,
  ManagementUserDto,
  ReplyCreateUserDto,
  UpdateUserDto,
} from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { Prisma } from '../../../prisma/generated/client';
import { PrismaService } from '../prisma/prisma.service';

type UserUpdateWithRole = Prisma.userUpdateInput & {
  role_user: { set: UserRole };
};


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async updateUserRole(userId: number, newRole: UserRole) {
    // 1. Проверяем существование пользователя
    const userExists = await this.prisma.user.findUnique({
      where: { id: userId }
    });

    if (!userExists) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // 2. Проверяем валидность роли
    if (!Object.values(UserRole).includes(newRole)) {
      throw new ForbiddenException(`Invalid role: ${newRole}`);
    }


    // const updateData: UserUpdateWithRole = {
    //   role_user: { set: newRole }
    // };

    // 3. Формируем данные для обновления с правильным типом
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        role_user: newRole as any // Явное приведение типа
      },
      select: {
        id: true,
        email: true,
        role_user: true
      }
    });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    await this.findById(id);

    if (updateUserDto.email) {
      const existingUser = await this.prisma.user.findFirst({
        where: {
          email: updateUserDto.email,
          NOT: { id },
        },
      });

      if (existingUser) {
        throw new ConflictException('Email already in use by another user');
      }
    }

    const updateData: Prisma.userUpdateInput = {
      ...(updateUserDto.name && { name: updateUserDto.name }),
      ...(updateUserDto.surname && { surname: updateUserDto.surname }),
      ...(updateUserDto.middle_name && { middle_name: updateUserDto.middle_name }),
      ...(updateUserDto.subdivision && { subdivision: updateUserDto.subdivision }),
      ...(updateUserDto.email && { email: updateUserDto.email }),
      ...(updateUserDto.rang && { rang: updateUserDto.rang }),
    };

    try {
      const updatedUser = await this.prisma.user.update({
        where: { id },
        data: updateData,
      });

      return {
        key: updatedUser.id.toString(),
        name: [updatedUser.surname, updatedUser.name, updatedUser.middle_name]
          .filter(Boolean)
          .join(' '),
        rang: updatedUser.role_id?.toString() || 'Не указана',
        subdivision: updatedUser.subdivision || 'Не указано',
        email: updatedUser.email,
      };
    } catch (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }
  }

  async getUsersForManagement(): Promise<ManagementUserDto[]> {
    const users = await this.prisma.user.findMany();

    return users.map((user) => ({
      key: user.id,
      name: `${user.surname} ${user.name} ${user.middle_name || ''}`.trim(),
      rang: user.role_id?.toString() || 'Не указана',
      subdivision: user.subdivision || 'Не указано',
      address: user.email,
    }));
  }

  async createUser(createUserDto: CreateUserDto): Promise<ReplyCreateUserDto> {
    const existingUser = await this.findByEmail(createUserDto.email);

    if (existingUser) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    
    const user = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
        role_user: UserRole.USER // Устанавливаем роль по умолчанию
      },
    });

    return {
      id: user.id,
      email: user.email,
    };
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  private async findById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}