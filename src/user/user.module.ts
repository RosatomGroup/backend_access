import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserAuthService } from './services/user-auth.service';
import { UserProfileService } from './services/user-profile.service';
import { PrismaModule } from '../modules/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({ // Добавьте JwtModule
      secret: process.env.JWT_SECRET, //секретный ключ
      signOptions: { expiresIn: '60s' }, //срок действия токена
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserAuthService, UserProfileService]
})
export class UserModule {}
