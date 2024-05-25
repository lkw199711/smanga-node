/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 17:33:34
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-16 20:22:21
 * @FilePath: \smanga-node\src\user\user.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../controllers/user/dto/create-user.dto';
import { UpdateUserDto } from '../controllers/user/dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll(page, pageSize) {
    const list = await this.userRepository.find({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    const count = await this.userRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(where: any) {
    const options = {
      where
    };

    return this.userRepository.findOne(options);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.userRepository.delete(id);
  }
}
