/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-04-24 16:31:31
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-03 17:50:34
 * @FilePath: \smanga-node\src\cats\cats.controller.ts
 * @Description: 调试模块
 */
import { Controller, Get, Param, Req } from '@nestjs/common';
import { log } from 'console';
import { Request } from 'express';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user.entity';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    log(id);
    return `This action returns a #${id} cat`;
  }
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(id: number, user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
