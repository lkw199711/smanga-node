/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 17:56:42
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-10 20:53:30
 * @FilePath: \smanga-node\src\compress\compress.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreateCompressDto } from './dto/create-compress.dto';
import { UpdateCompressDto } from './dto/update-compress.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compress } from './entities/compress.entity';

@Injectable()
export class CompressService {
  constructor(
    @InjectRepository(Compress)
    private readonly compressRepository: Repository<Compress>,
  ) {}
  async create(createCompressDto: CreateCompressDto) {
    return await this.compressRepository.save(createCompressDto);
  }

  async findAll() {
    const list = await this.compressRepository.find();
    const count = await this.compressRepository.count();
    
    return {
      list,
      count,
    };
  }

  findOne(id: number) {
    const options = {
      where: {
        compressId: id,
      },
    };

    return this.compressRepository.findOne(options);
  }

  update(id: number, updateCompressDto: UpdateCompressDto) {
    return this.compressRepository.update(id, updateCompressDto);
  }

  remove(id: number) {
    return this.compressRepository.delete(id);
  }
}
