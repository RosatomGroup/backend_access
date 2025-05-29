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
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
      },
    });

    return { id: user.id, email: user.email, accessLevel: user.accessLevel };
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<ReplyUpdateUserDto> {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Неверный ID пользователя');
    }

    await this.findById(id);

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        name: updateUserDto.name,
        surname: updateUserDto.surname,
        middleName: updateUserDto.middleName,
        phone: updateUserDto.phone,
        avatarUrl: updateUserDto.avatarUrl,
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

  async partialUpdateUser(
    id: number,
    updateUserDto: Partial<UpdateUserDto>,
  ): Promise<ReplyUpdateUserDto> {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Неверный ID пользователя');
    }

    await this.findById(id);

    // Фильтруем undefined значения
    const updateData: Prisma.UserUpdateInput = {};
    
    if (updateUserDto.name !== undefined) updateData.name = updateUserDto.name;
    if (updateUserDto.surname !== undefined) updateData.surname = updateUserDto.surname;
    if (updateUserDto.middleName !== undefined) updateData.middleName = updateUserDto.middleName;
    if (updateUserDto.phone !== undefined) updateData.phone = updateUserDto.phone;
    if (updateUserDto.avatarUrl !== undefined) updateData.avatarUrl = updateUserDto.avatarUrl;
    if (updateUserDto.rang !== undefined) updateData.rang = updateUserDto.rang;
    if (updateUserDto.birthDate !== undefined) {
      updateData.birthDate = updateUserDto.birthDate ? new Date(updateUserDto.birthDate) : null;
    }
    if (updateUserDto.subdivision !== undefined) updateData.subdivision = updateUserDto.subdivision;
    if (updateUserDto.serviceNumber !== undefined) updateData.serviceNumber = updateUserDto.serviceNumber;

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateData,
    });

    return this.mapToReplyDto(updatedUser);
  }

  private async findById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Пользователь с ID ${id} не найден`);
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
      avatarUrl: user.avatarUrl || undefined,
    };
  }
}