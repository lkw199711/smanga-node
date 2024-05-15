/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 17:33:34
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-14 11:24:43
 * @FilePath: \smanga-node\src\user\user.module.ts
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
