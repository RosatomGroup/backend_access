import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './modules/users/user.service';
import { RegisterController } from './modules/register/register.controller';
import { RegisterService } from './modules/register/register.service';
import { RegisterModule } from './modules/register/register.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    RegisterModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, RegisterController],
  providers: [AppService, UserService, RegisterService],
})
export class AppModule {}
