import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRequestDto, RequestDto, OwnRequestDto } from './request.dto';
import { role, user, resource, request } from '@prisma/client';

type RequestWithRelations = request & {
  resource: resource;
  role?: role | null;
  user_request: Array<{
    user: user;
  }>;
};

@Injectable()
export class RequestService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Создает новую заявку в системе
   * @param createRequestDto DTO с данными для создания заявки
   * @returns Созданная заявка
   * @throws NotFoundException если связанные сущности не найдены
   */
  async createRequest(createRequestDto: CreateRequestDto): Promise<RequestDto> {
    try {
      // 1. Проверяем существование пользователя
      const userRecord: user | null = await this.prisma.user.findUnique({
        where: { id: createRequestDto.userId },
      });

      if (!userRecord) {
        throw new NotFoundException(
          `Пользователь с ID ${createRequestDto.userId} не найден`
        );
      }

      // 2. Проверяем существование ресурса
      const resourceRecord: resource | null = await this.prisma.resource.findUnique({
        where: { id: createRequestDto.resourceId },
      });

      if (!resourceRecord) {
        throw new NotFoundException(
          `Ресурс с ID ${createRequestDto.resourceId} не найден`
        );
      }

      // 3. Проверяем существование роли (если указана)
      let roleRecord: role | null = null;
      if (createRequestDto.roleId) {
        roleRecord = await this.prisma.role.findUnique({
          where: { id: createRequestDto.roleId },
        });

        if (!roleRecord) {
          throw new NotFoundException(
            `Роль с ID ${createRequestDto.roleId} не найдена`
          );
        }
      }

      // 4. Создаем заявку
      const createdRequest: RequestWithRelations = await this.prisma.request.create({
        data: {
          status: 'в работе',
          request_type: createRequestDto.requestSubject,
          create_date: new Date(),
          complete_date: null,
          resource_id: createRequestDto.resourceId,
          role_id: createRequestDto.roleId || null,
          user_request: {
            create: {
              user_id: createRequestDto.userId,
            },
          },
        },
        include: {
          resource: true,
          role: true,
          user_request: {
            include: {
              user: true,
            },
          },
        },
      });

      // 5. Формируем полное имя пользователя
      const userFromRequest = createdRequest.user_request[0]?.user;
      const userNameParts = [
        userFromRequest?.surname,
        userFromRequest?.name,
        userFromRequest?.middle_name,
      ].filter((part): part is string => !!part);

      const fullName = userNameParts.join(' ').trim() || 'Неизвестный пользователь';

      // 6. Формируем ответ
      return {
        id: createdRequest.id,
        name: fullName,
        requestSubject: createdRequest.request_type,
        role: createdRequest.role?.description || 'Не указана',
        status: createdRequest.status,
        system: createdRequest.resource.name,
        submissionTime: createdRequest.create_date.toISOString(),
        email: createRequestDto.email,
      };
    } catch (error) {
      console.error('Ошибка при создании заявки:', error);
      throw new Error(
        error instanceof NotFoundException
          ? error.message
          : 'Не удалось создать заявку'
      );
    }
  }

  /**
   * Получает заявки конкретного пользователя
   * @param userId ID пользователя
   * @returns Массив заявок пользователя
   */
  async getOwnRequests(userId: number): Promise<OwnRequestDto[]> {
    try {
      const requests = await this.prisma.request.findMany({
        where: {
          user_request: {
            some: {
              user_id: userId,
            },
          },
        },
        include: {
          resource: true,
          role: true,
          user_request: {
            include: {
              user: true,
            },
          },
        },
        orderBy: {
          create_date: 'desc',
        },
      });

      return requests.map((req) => {
        const userData = req.user_request[0]?.user;
        const requesterName = [
          userData?.surname,
          userData?.name,
        ]
          .filter((part): part is string => !!part)
          .join(' ')
          .trim();

        return {
          id: req.id,
          requester: requesterName || 'Неизвестный пользователь',
          createDate: req.create_date,
          status: req.status,
          resourceName: req.resource.name,
          roleName: req.role?.description || 'Не указана',
        };
      });
    } catch (error) {
      console.error('Ошибка при получении заявок пользователя:', error);
      throw new Error('Не удалось получить заявки пользователя');
    }
  }

  /**
   * Получает все исходящие заявки
   * @returns Массив всех заявок
   */
  async getAllOutgoingRequests(): Promise<RequestDto[]> {
    try {
      const requests = await this.prisma.request.findMany({
        include: {
          resource: true,
          role: true,
          user_request: {
            include: {
              user: true,
            },
          },
        },
        orderBy: {
          create_date: 'desc',
        },
      });

      return requests.map((req) => {
        const userData = req.user_request[0]?.user;
        const userNameParts = [
          userData?.surname,
          userData?.name,
          userData?.middle_name,
        ].filter((part): part is string => !!part);

        const fullName = userNameParts.join(' ').trim() || 'Неизвестный пользователь';

        return {
          id: req.id,
          name: fullName,
          requestSubject: req.request_type,
          role: req.role?.description || 'Не указана',
          status: req.status,
          system: req.resource.name,
          submissionTime: req.create_date.toISOString(),
          email: userData?.email || '',
        };
      });
    } catch (error) {
      console.error('Ошибка при получении исходящих заявок:', error);
      throw new Error('Не удалось получить исходящие заявки');
    }
  }

  /**
   * Обновляет статус заявки
   * @param id ID заявки
   * @param status Новый статус
   */
  async updateRequestStatus(id: number, status: string): Promise<void> {
    try {
      await this.prisma.request.update({
        where: { id },
        data: { status },
      });
    } catch (error) {
      console.error('Ошибка при обновлении статуса заявки:', error);
      throw new Error('Не удалось обновить статус заявки');
    }
  }

  /**
   * Получает список всех систем
   * @returns Массив ресурсов (систем)
   */
  async getSystems(): Promise<resource[]> {
    try {
      return await this.prisma.resource.findMany({
        orderBy: {
          name: 'asc',
        },
      });
    } catch (error) {
      console.error('Ошибка при получении списка систем:', error);
      throw new Error('Не удалось получить список систем');
    }
  }

  /**
   * Получает список всех ролей
   * @returns Массив ролей с информацией о доступах
   */
  async getRoles() {
    try {
      return await this.prisma.role.findMany({
        include: {
          access: true,
          resource_role: {
            include: {
              resource: true,
            },
          },
        },
        orderBy: {
          name: 'asc',
        },
      });
    } catch (error) {
      console.error('Ошибка при получении списка ролей:', error);
      throw new Error('Не удалось получить список ролей');
    }
  }

  /**
   * Получает роли для конкретной системы
   * @param systemId ID системы
   * @returns Массив ролей для указанной системы
   */
  async getRolesBySystem(systemId: number) {
    try {
      return await this.prisma.resource_role.findMany({
        where: {
          resources_id: systemId,
        },
        include: {
          role: {
            include: {
              access: true,
            },
          },
          resource: true,
        },
        orderBy: {
          role: {
            name: 'asc',
          },
        },
      });
    } catch (error) {
      console.error('Ошибка при получении ролей для системы:', error);
      throw new Error('Не удалось получить роли для системы');
    }
  }
}