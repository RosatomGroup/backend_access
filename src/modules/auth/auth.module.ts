import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {JwtStrategy} from './jwt.strategy';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {jwtConstants} from "./constants";
import {UsersService} from "../users/users.service";
import {PrismaService} from "../prisma.service";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60s'},
        }),],
    providers: [AuthService, JwtStrategy, UsersService, PrismaService],
    controllers: [AuthController],
})
export class AuthModule {
}