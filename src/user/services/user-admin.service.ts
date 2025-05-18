import {
    ConflictException,
    Injectable,
    NotFoundException,
    InternalServerErrorException,
    BadRequestException,
  } from '@nestjs/common';
  import { Prisma } from '@prisma/client';
  import { PrismaService } from '../../modules/prisma/prisma.service';
  import {
    CreateUserDto,
    ManagementUserDto,
    ReplyCreateUserDto,
    AdminUpdateUserDto,
  } from '../dto/user.dto';
  // import { UpdateUserDto } from '../dto/update-user.dto'
  import * as bcrypt from 'bcrypt';
  
  @Injectable()
  export class UserAdminService {
    private readonly SALT_ROUNDS = 10;
  
    constructor(private readonly prisma: PrismaService) {}
  
    /**
     * Получает список всех пользователей для админки
     * @returns Массив пользователей в формате ManagementUserDto
     */
    async getUsersForManagement(): Promise<ManagementUserDto[]> {
      try {
        const users = await this.prisma.user.findMany({
          include: {
            role: {
              select: {
                name: true,
              },
            },
          },
          
          orderBy: [
            { surname: 'asc' },
            { name: 'asc' },
          ],
        });
  
        return users.map(user => ({
          key: user.id,
          name: this.formatFullName(user),
          rang: user.role?.name || 'Не указана',
          subdivision: user.name || 'Не указано',
          address: user.email,
        }));
      } catch (error) {
        throw new InternalServerErrorException('Failed to fetch users for management');
      }
    }
  
    /**
     * Создает нового пользователя (администратором)
     * @param createUserDto Данные для создания пользователя
     * @returns Основные данные созданного пользователя
     */
    async createUser(createUserDto: CreateUserDto): Promise<ReplyCreateUserDto> {
      await this.validateEmailUniqueness(createUserDto.email);
  
      try {
        const hashedPassword = await bcrypt.hash(createUserDto.password, this.SALT_ROUNDS);
  
        const user = await this.prisma.user.create({
          data: {
            email: createUserDto.email,
            password: hashedPassword,
            // name: createUserDto.name,
            // surname: createUserDto.surname,
            // middle_name: createUserDto.middle_name,
            // subdivision: createUserDto.subdivision,
            // role_id: createUserDto.role_id,
          },
          select: {
            id: true,
            email: true,
          },
        });
  
        return user;
      } catch (error) {
        this.handlePrismaError(error);
      }
    }
  
    /**
     * Полностью обновляет данные пользователя (администратором)
     * @param id ID пользователя
     * @param updateUserDto Данные для обновления
     * @returns Обновленные данные пользователя
     */
    async updateUser(id: number, updateUserDto: AdminUpdateUserDto): Promise<ManagementUserDto> {
      await this.validateUserExists(id);
  
      if (updateUserDto.email) {
        await this.validateEmailUniqueness(updateUserDto.email, id);
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
  
        return {
          key: updatedUser.id,
          name: this.formatFullName(updatedUser),
          rang: updatedUser.role?.name || 'Не указана',
          subdivision: updatedUser.name || 'Не указано',
          address: updatedUser.email,
        };
      } catch (error) {
        this.handlePrismaError(error);
      }
    }
  
    /**
     * Удаляет пользователя
     * @param id ID пользователя
     */
    async deleteUser(id: number): Promise<void> {
      await this.validateUserExists(id);
  
      try {
        await this.prisma.user.delete({
          where: { id },
        });
      } catch (error) {
        this.handlePrismaError(error);
      }
    }
  
    private formatFullName(user: {
      surname: string | null;
      name: string | null;
      middle_name: string | null;
    }): string {
      return [user.surname, user.name, user.middle_name]
        .filter(Boolean)
        .join(' ')
        .trim();
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
  
    private async validateEmailUniqueness(email: string, excludeId?: number): Promise<void> {
      const existingUser = await this.prisma.user.findFirst({
        where: {
          email,
          ...(excludeId && { NOT: { id: excludeId } }),
        },
        select: { id: true },
      });
  
      if (existingUser) {
        throw new ConflictException('Email already in use by another user');
      }
    }
  
    private async prepareUpdateData(updateUserDto: AdminUpdateUserDto): Promise<Prisma.userUpdateInput> {
      const updateData: Prisma.userUpdateInput = {
        ...(updateUserDto.name !== undefined && { name: updateUserDto.name }),
        ...(updateUserDto.surname !== undefined && { surname: updateUserDto.surname }),
        ...(updateUserDto.middle_name !== undefined && { middle_name: updateUserDto.middle_name }),
        ...(updateUserDto.subdivision !== undefined && { subdivision: updateUserDto.subdivision }),
        ...(updateUserDto.email !== undefined && { email: updateUserDto.email }),
        ...(updateUserDto.role_id !== undefined && { role_id: updateUserDto.role_id }),
      };
    
      if (updateUserDto.password) {
        updateData.password = await bcrypt.hash(updateUserDto.password, this.SALT_ROUNDS);
      }
    
      return updateData;
    }
  
    private handlePrismaError(error: unknown): never {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
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
      throw new InternalServerErrorException('Operation failed');
    }
  }