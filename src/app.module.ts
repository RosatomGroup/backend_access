// import { Module } from '@nestjs/common';
// import { UserModule } from './modules/users/user.module';
// import { AuthModule } from './modules/auth/auth.module';
// import { PrismaModule } from './modules/prisma/prisma.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [PrismaModule, UserModule, AuthModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { RequestModule } from './modules/requests/request.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, RequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
