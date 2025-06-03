import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { NotificationsService } from '../notifications/notifications.service';

@Module({
  imports: [PrismaModule],
  controllers: [RequestController],
  providers: [RequestService,NotificationsService],
  exports: [RequestService],
})
export class RequestModule {}