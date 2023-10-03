import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto';

let USERS = [];

@Controller('/users')
export class UserController {
  @Post()
  addUser(@Body() createUserDto: CreateUserDto) {
    USERS.push(createUserDto);
    return 'User created';
  }

  @Get()
  getUsers() {
    return USERS;
  }

  @Get(':id')
  getUser(@Param('id') id: Number) {
    return USERS.find((user) => +user.id === +id);
  }

  @Put(':id')
  updateUser(@Param('id') id: Number, @Body() updateUserDto: CreateUserDto) {
    const userIdx = USERS.findIndex((user) => +user.id === +id);

    if (!userIdx) {
      return;
    }
    USERS[userIdx] = updateUserDto;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: Number) {
    USERS = USERS.filter((user) => +user.id !== +id);
  }
}
