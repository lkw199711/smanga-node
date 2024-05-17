/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:57:47
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-17 15:17:06
 * @FilePath: \smanga-node\src\path\path.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreatePathDto } from './dto/create-path.dto';
import { UpdatePathDto } from './dto/update-path.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Path } from './entities/path.entity';

@Injectable()
export class PathService {
  constructor(
    @InjectRepository(Path)
    private readonly pathRepository: Repository<Path>,
  ) { }

  async create(createPathDto: CreatePathDto) {
    return await this.pathRepository.save(createPathDto);
  }

  async findAll(page: number, pageSize: number) {
    const options = {
      take: pageSize,
      skip: (page - 1) * pageSize,
    }
    const list = await this.pathRepository.find(page? options: {});
    const count = await this.pathRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        pathId: id,
      },
    };

    return this.pathRepository.findOne(options);
  }

  async update(id: number, updatePathDto: UpdatePathDto) {
    return this.pathRepository.update(id, updatePathDto);
  }

  async remove(id: number) {
    return this.pathRepository.delete(id);
  }
}
