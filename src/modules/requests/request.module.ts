import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Используем модуль вместо прямого сервиса

@Module({
  imports: [PrismaModule], // Импортируем PrismaModule
  controllers: [RequestController],
  providers: [RequestService],
  exports: [RequestService]
})
export class RequestModule {}