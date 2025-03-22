import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from "./dto/user.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {

        return this.usersService.createUser(createUserDto);
    }

    @Get()
    async getAll() {
        return this.usersService.getAllUsers();
    }


}
