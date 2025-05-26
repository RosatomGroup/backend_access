import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import {
  CreateUserDto,
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

    await this.findById(id);

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        name: updateUserDto.name,
        surname: updateUserDto.surname,
        middleName: updateUserDto.middleName,
        phone: updateUserDto.phone,
        rang: updateUserDto.rang,
        birthDate: updateUserDto.birthDate
          ? new Date(updateUserDto.birthDate)
          : null,
        subdivision: updateUserDto.subdivision,
        serviceNumber: updateUserDto.serviceNumber,
      },
    });

    return this.mapToReplyDto(updatedUser);
  }

  private async findById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  public async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  private mapToReplyDto(user: Prisma.UserGetPayload<any>): ReplyUpdateUserDto {
    return {
      name: user.name || 'Не указано',
      surname: user.surname || 'Не указано',
      middleName: user.middleName || 'Не указано',
      phone: user.phone || 'Не указано',
      rang: user.rang || 'Не указано',
      birthDate: user.birthDate || undefined,
      subdivision: user.subdivision || 'Не указано',
      serviceNumber: user.serviceNumber || 0,
    };
  }
}
