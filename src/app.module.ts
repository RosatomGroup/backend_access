import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/user.module';
import { RequestModule } from './modules/requests/request.module'; // Добавьте этот импорт
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    RequestModule, // Добавьте эту строку
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}