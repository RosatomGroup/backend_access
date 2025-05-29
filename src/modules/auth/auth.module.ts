import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from '../users/user.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { PasswordResetModule } from '../password-reset/password-reset.module';
import { MailModule } from '../mail/mail.module';
import { RegisterModule } from '../register/register.module';
import { TokenModule } from '../token/token.module';
import { TokenService } from '../token/token.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
    PasswordResetModule,
    MailModule,
    RegisterModule,
    TokenModule,
  ],
  providers: [
    AuthService,
    JwtStrategy,
    UserService,
    PrismaService,
    TokenService,
  ],
  controllers: [AuthController],
  exports: [RegisterModule, TokenModule, AuthService],
})
export class AuthModule {}
