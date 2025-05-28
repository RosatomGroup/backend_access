import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/notifications.dto';
import { $Enums } from '@prisma/client';
import RequestStatus = $Enums.RequestStatus;

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async getByEmail(email: string) {
    return this.prisma.notification.findMany({
      where: { user: { email } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async markReadBulk(ids: number[]) {
    const result = await this.prisma.notification.updateMany({
      where: { id: { in: ids } },
      data: { read: true },
    });
    return { updated: result.count };
  }

  async create(dto: CreateNotificationDto) {
    const message = this.generateMessage(dto.status, dto.requestId);
    return this.prisma.notification.create({
      data: {
        userId: dto.userId,
        requestId: dto.requestId,
        status: dto.status,
        message,
      },
    });
  }

  private generateMessage(status: RequestStatus, requestId: number): string {
    switch (status) {
      case 'PENDING':
        return `Заявка №${requestId} отправлена на согласование`;
      case 'APPROVED':
        return `Заявка №${requestId} согласована`;
      case 'REJECTED':
        return `Заявка №${requestId} отклонена`;
      default:
        return `Заявка №${requestId} обновлена`;
    }
  }
}
