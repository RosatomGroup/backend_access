import {
    ConflictException,
    Injectable,
    NotFoundException,
    InternalServerErrorException,
    BadRequestException,
  } from '@nestjs/common';
  import { Prisma } from '@prisma/client';
  import { PrismaService } from '../../modules/prisma/prisma.service';
  import { UpdateUserDto} from '../dto/update-user.dto';
  import { AdminUpdateUserDto } from '../dto/user.dto';
  import * as bcrypt from 'bcrypt';
  
  @Injectable()
  export class UserProfileService {
    private readonly SALT_ROUNDS = 10;
  
    constructor(private readonly prisma: PrismaService) {}
  
    /**
     * Получает список всех пользователей
     * @returns Массив пользователей
     */
    async getAllUsers() {
      try {
        return await this.prisma.user.findMany({
          select: {
            id: true,
            email: true,
            name: true,
            surname: true,
            middle_name: true,
            // subdivision: true,
            role_id: true,
            role: {
              select: {
                name: true,
              },
            },
          },
        });
      } catch (error) {
        throw new InternalServerErrorException('Failed to fetch users');
      }
    }
  
    /**
     * Обновляет данные пользователя
     * @param id ID пользователя
     * @param updateUserDto DTO с обновляемыми данными
     * @returns Обновленные данные пользователя
     */
    async updateUser(id: number, updateUserDto: UpdateUserDto | AdminUpdateUserDto) {
      await this.validateUserExists(id);
  
      if (updateUserDto.email) {
        await this.validateEmailUniqueness(id, updateUserDto.email);
      }
  
      try {
        const updateData = await this.prepareUpdateData(updateUserDto);
        const updatedUser = await this.prisma.user.update({
          where: { id },
          data: updateData,
          include: {
            role: {
              select: {
                name: true,
              },
            },
          },
        });
  
        return this.formatUserResponse(updatedUser);
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          this.handlePrismaError(error);
        }
        throw new InternalServerErrorException('Failed to update user');
      }
    }
  
    private async validateUserExists(id: number): Promise<void> {
      const user = await this.prisma.user.findUnique({
        where: { id },
        select: { id: true },
      });
  
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
    }
  
    private async validateEmailUniqueness(
      id: number,
      email: string,
    ): Promise<void> {
      const existingUser = await this.prisma.user.findFirst({
        where: {
          email,
          NOT: { id },
        },
        select: { id: true },
      });
  
      if (existingUser) {
        throw new ConflictException('Email already in use by another user');
      }
    }
  
    private async prepareUpdateData(
      updateUserDto: UpdateUserDto | AdminUpdateUserDto,
    ): Promise<Prisma.userUpdateInput> {
      const updateData: Prisma.userUpdateInput = {
        ...(updateUserDto.name && { name: updateUserDto.name }),
        ...(updateUserDto.surname && { surname: updateUserDto.surname }),
        ...(updateUserDto.middle_name && { middle_name: updateUserDto.middle_name }),
        ...(updateUserDto.subdivision && { subdivision: updateUserDto.subdivision }),
        ...(updateUserDto.email && { email: updateUserDto.email }),
      };
  
      // Обработка специфичных полей для AdminUpdateUserDto
      if ('role_id' in updateUserDto && updateUserDto.role_id) {
        updateData.role = {
          connect: { id: updateUserDto.role_id }
        };
      }
  
      // Хеширование пароля если он предоставлен
      if ('password' in updateUserDto && updateUserDto.password) {
        updateData.password = await bcrypt.hash(
          updateUserDto.password,
          this.SALT_ROUNDS,
        );
      }
  
      return updateData;
    }
  
    private formatUserResponse(user: {
      id: number;
      surname: string | null;
      name: string | null;
      middle_name: string | null;
      email: string;
      role?: { name: string } | null;
      role_id?: number | null;
    }): {
      key: string;
      name: string;
      rang: string;
      address: string;
    } {
      return {
        key: user.id.toString(),
        name: [user.surname, user.name, user.middle_name]
          .filter(Boolean)
          .join(' '),
        rang: user.role?.name || user.role_id?.toString() || 'Не указана',
        address: user.email,
      };
    }
  
    private handlePrismaError(error: Prisma.PrismaClientKnownRequestError): never {
      switch (error.code) {
        case 'P2025':
          throw new NotFoundException('User not found');
        case 'P2002':
          throw new ConflictException('Unique constraint violation');
        case 'P2003':
          throw new BadRequestException('Invalid role specified');
        default:
          throw new InternalServerErrorException('Database operation failed');
      }
    }
  }