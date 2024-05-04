/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-04-24 16:31:31
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-04 10:23:49
 * @FilePath: \smanga-node\src\cats\cats.controller.ts
 * @Description: 调试模块
 */
import { Controller, Get, Param, Req, Post } from '@nestjs/common';
import { log } from 'console';
import { Request } from 'express';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user.entity';

@Controller('cats')
export class CatsController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  // @Get(':id')
  // findOne(@Param('id1') id1: string): string {
  //   log(id1);
  //   return `This action returns a #${id1} cat`;
  // }

  @Get(':id')
  async create(): Promise<string> {
    const user: User = {
      id: null,
      name: 'Kitty',
      age: 3,
    };

    await this.userRepository.save(user);

    return 'New cat record has been created!';
  }
}

