import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from '@prisma/client';
import {
  CreateNotificationDto,
  MarkReadBulkDto,
} from './dto/notifications.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async getNotifications(
    @Query('email') email: string,
  ): Promise<Notification[]> {
    return this.notificationsService.getByEmail(email);
  }

  @Post('read-bulk')
  async markReadBulk(
    @Body() dto: MarkReadBulkDto,
  ): Promise<{ updated: number }> {
    return this.notificationsService.markReadBulk(dto.ids);
  }

  @Post()
  async createNotification(
    @Body() dto: CreateNotificationDto,
  ): Promise<Notification> {
    return this.notificationsService.create(dto);
  }
}
