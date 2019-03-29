import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UserCreate } from '../interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async findAllUser(): Promise<UserCreate[]> {
    return await this.usersService.findAll();
  }
  @Post('/create')
  async create(@Body() user: CreateUserDTO) {
    await this.usersService.create(user);
  }

}
