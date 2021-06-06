import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { config } from '../ormconfig';
import * as ORM_CONFIG from '../config/ormconfig';

@Module({ imports: [TypeOrmModule.forRoot(ORM_CONFIG)] })
export class DatabaseModule {}
