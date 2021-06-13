import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { UserEntity } from './models/users.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<UserEntity> {
  constructor(@InjectRepository(UserEntity) repo) {
    super(repo);
  }

  // async createUser(user: User): Promise<User> {
  //   return await this.userRepository.save(user);
  // }

  // async getUsers(): Promise<User[]> {
  //   return await this.userRepository.find();
  // }
}
