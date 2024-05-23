/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 18:40:43
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-11 14:17:59
 * @FilePath: \smanga-node\src\history\history.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from '../controllers/history/dto/create-history.dto';
import { UpdateHistoryDto } from '../controllers/history/dto/update-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from '../entities/history.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) { }
  
  async create(createHistoryDto: CreateHistoryDto) {
    return await this.historyRepository.save(createHistoryDto);
  }

  async findAll() {
    const list = await this.historyRepository.find();
    const count = await this.historyRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        historyId: id,
      },
    };

    return this.historyRepository.findOne(options);
  }

  async update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return this.historyRepository.update(id, updateHistoryDto);
  }

  async remove(id: number) {
    return this.historyRepository.delete(id);
  }
}
