import { Get } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './models/user.entity';

import { User } from './models/user.interface';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: UserEntity, isArray: true })
  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: UserEntity })
  @Post('/create')
  createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }
}
