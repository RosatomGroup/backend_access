import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { PasswordResetModule } from './modules/password-reset/password-reset.module';
import { PasswordResetController } from './modules/password-reset/password-reset.controller';
import { PasswordResetService } from './modules/password-reset/password-reset.service';
import { MailModule } from './modules/mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import { TokenModule } from './modules/token/token.module';
import { RefreshTokenMiddleware } from './modules/auth/middleware';
import { RequestModule } from './modules/requests/request.module';
import { ManagementModule } from './modules/management/management.module';
import { ManagementController } from './modules/management/management.controller';
import { UserController } from './modules/users/user.controller';
import { RequestController } from './modules/requests/request.controller';
import { RequestService } from './modules/requests/request.service';
import { ManagementService } from './modules/management/management.service';
import { HttpLoggerMiddleware } from './modules/middleware/HttpLoggerMiddleware';
import * as cookieParser from 'cookie-parser';
import { NotificationsService } from './modules/notifications/notifications.service';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { NotificationsController } from './modules/notifications/notifications.controller';

@Module({
  imports: [
    PrismaModule,
    ManagementModule,
    UserModule,
    AuthModule,
    TokenModule,
    RegisterModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PasswordResetModule,
    MailModule,
    JwtModule,
    RequestModule,
    NotificationsModule,
  ],
  controllers: [
    AppController,
    RegisterController,
    PasswordResetController,
    ManagementController,
    UserController,
    RequestController,
    NotificationsController,
  ],
  providers: [
    AppService,
    UserService,
    RegisterService,
    PasswordResetService,
    RequestService,
    ManagementService,
    NotificationsService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser(), RefreshTokenMiddleware).forRoutes('*');
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
