import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../../prisma/generated/client';
import {
  CreateUserDto,
  ManagementUserDto,
  ReplyCreateUserDto,
  ReplyUpdateUserDto,
  UpdateUserDto,
} from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(createUserDto: CreateUserDto): Promise<ReplyCreateUserDto> {
    const existingUser = await this.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
      },
    });

    return { id: user.id, email: user.email };
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<ReplyUpdateUserDto> {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid user ID');
    }

    const existingUser = await this.findById(id);

    if (updateUserDto.email && updateUserDto.email !== existingUser.email) {
      await this.validateEmailUniqueness(id, updateUserDto.email);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        name: updateUserDto.name,
        surname: updateUserDto.surname,
        middle_name: updateUserDto.middleName,
        phone: updateUserDto.phone,
        rang: updateUserDto.rang,
        birthDate: updateUserDto.birthDate
          ? new Date(updateUserDto.birthDate)
          : null,
        subdivision: updateUserDto.subdivision,
        serviceNumber: updateUserDto.serviceNumber,
        email: updateUserDto.email,
      },
    });

    return this.mapToReplyDto(updatedUser);
  }

  async getUsersForManagement(): Promise<ManagementUserDto[]> {
    const users = await this.prisma.user.findMany({
      include: { role: true },
    });
    return users.map((user) => ({
      key: user.id,
      name: [user.surname, user.name, user.middleName]
        .filter(Boolean)
        .join(' '),
      rang: user.rang || 'Не указано',
      subdivision: user.subdivision || 'Не указано',
      email: user.email,
      role: user.role?.name,
    }));
  }

  private async findById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  private async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  private async validateEmailUniqueness(
    userId: number,
    email: string,
  ): Promise<void> {
    const existingUser = await this.prisma.user.findFirst({
      where: { email, NOT: { id: userId } },
    });
    if (existingUser) {
      throw new ConflictException('Email already in use by another user');
    }
  }

  private mapToReplyDto(user: Prisma.userGetPayload<{}>): ReplyUpdateUserDto {
    return {
      name: updatedUser.name,
      surname: updatedUser.surname,
      middleName: updatedUser.middleName,
      phone: updatedUser.phone,
      rang: updatedUser.rang,
      birthDate: updatedUser.birthDate,
      subdivision: updatedUser.subdivision,
      serviceNumber: updatedUser.serviceNumber,
      email: updatedUser.email,
    };
  }
}
