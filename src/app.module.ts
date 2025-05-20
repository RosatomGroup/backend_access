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
import { PasswordResetModule } from './modules/password-reset/password-reset.module';
import { PasswordResetController } from './modules/password-reset/password-reset.controller';
import { PasswordResetService } from './modules/password-reset/password-reset.service';
import { MailModule } from './modules/mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import { TokenModule } from './modules/token/token.module';

@Module({
  imports: [
    PrismaModule,
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
  ],
  controllers: [AppController, RegisterController, PasswordResetController],
  providers: [AppService, UserService, RegisterService, PasswordResetService],
})
export class AppModule {}
