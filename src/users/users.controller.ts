import { Get } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
// import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './models/users.entity';
import { Crud, CrudController } from '@nestjsx/crud';

// import { User } from './models/user.interface';
import { UsersService } from './users.service';

// @ApiTags('User')
@Crud({
  model: {
    type: UserEntity,
  },
})
@Controller('users')
export class UsersController implements CrudController<UserEntity> {
  constructor(public service: UsersService) {}

  // @ApiOperation({ summary: 'Get all users' })
  // @ApiResponse({ status: 200, type: UserEntity, isArray: true })
  // @Get()
  // getUsers(): Promise<User[]> {
  //   return this.userService.getUsers();
  // }

  // @ApiOperation({ summary: 'Create user' })
  // @ApiResponse({ status: 200, type: UserEntity })
  // @Post('/create')
  // createUser(@Body() user: User): Promise<User> {
  //   return this.userService.createUser(user);
  // }
}
