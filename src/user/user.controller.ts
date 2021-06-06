import { Get } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';

import { User } from './models/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }
}
