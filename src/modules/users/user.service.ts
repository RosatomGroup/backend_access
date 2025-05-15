import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateUserDto,
  ManagementUserDto,
  ReplyCreateUserDto,
  ReplyUpdateUserDto,
  UpdateUserDto,
} from './dto/user.dto';

import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import {Prisma, user} from '../../../prisma/generated/client';

import userUpdateInput = Prisma.userUpdateInput;

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<ReplyUpdateUserDto> {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid user ID');
    }

    await this.findById(id);

    if (updateUserDto.email) {
      await this.validateEmailUniqueness(id, updateUserDto.email);
    }

    const updateData: userUpdateInput = this.prepareUpdateData(updateUserDto);

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateData,
    });

    return this.mapToReplyDto(updatedUser);
  }

  private async validateEmailUniqueness(
    userId: number,
    email: string,
  ): Promise<void> {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        email,
        NOT: { id: userId },
      },
    });

    if (existingUser) {
      throw new ConflictException('Email already in use by another user');
    }
  }

  private prepareUpdateData(
    updateUserDto: UpdateUserDto,
  ): Prisma.userUpdateInput {
    return {
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

  private mapToReplyDto(user: user): ReplyUpdateUserDto {
    return {
      name: [user.surname, user.name, user.middle_name]
        .filter(Boolean)
        .join(' '),
      subdivision: 'Не указана',
      email: user.email,
    };
  }

  async getUsersForManagement(): Promise<ManagementUserDto[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => this.mapUserToManagementDto(user));
  }

  private mapUserToManagementDto(user: user): ManagementUserDto {
    return {
      key: user.id,
      name: `${user.surname} ${user.name} ${user.middle_name || ''}`.trim(),
      rang: user.rang,
      subdivision: user.subdivision,
      email: user.email,
    };
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
}
