import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateUserDto,
  ManagementUserDto,
  ReplyCreateUserDto,
  UpdateUserDto,
} from './dto/user.dto';

import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
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
      ...(updateUserDto.middle_name && {
        middle_name: updateUserDto.middle_name,
      }),
      ...(updateUserDto.subdivision && {
        subdivision: updateUserDto.subdivision,
      }),
      ...(updateUserDto.email && { email: updateUserDto.email }),
    };

    // if (updateUserDto.password) {
    //   updateData.password = await bcrypt.hash(updateUserDto.password, 10);
    // }

    // if (updateUserDto.role_id) {
    //   updateData.role = {
    //     connect: { id: updateUserDto.role_id },
    //   };
    // }
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
        rang: updatedUser.role_id || 'Не указана',
        // subdivision: updatedUser.subdivision || 'Не указано',
        address: updatedUser.email,
      };
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new Error(`Failed to update user: ${error.message}`);
    }
  }


  
  async getUsersForManagement(): Promise<ManagementUserDto[]> {
    const users = await this.prisma.user.findMany();

    return users.map((user) => ({
      key: user.id,
      name: `${user.surname} ${user.name} ${user.middle_name || ''}`.trim(),
      rang: user.role_id?.toString() || 'Не указана',
      subdivision: 'Не указано', //user.subdivision || 'Не указано'
      address: user.email,
    }));
  }




  async createUser(createUserDto: CreateUserDto): Promise<ReplyCreateUserDto> {
    const existingUser = await this.findByEmail(createUserDto.email);

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }
    const hashedPassword: string = await bcrypt.hash(
      createUserDto.password,
      10,
    );
    const user = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
      },
    });
    const userReplyDto: ReplyCreateUserDto = {
      id: user.id,
      email: user.email,
    };

    return userReplyDto;
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
