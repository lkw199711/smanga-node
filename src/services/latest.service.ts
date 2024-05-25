import { Injectable } from '@nestjs/common';
import { CreateLatestDto } from '../controllers/latest/dto/create-latest.dto';
import { UpdateLatestDto } from '../controllers/latest/dto/update-latest.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Latest } from '../entities/latest.entity';

@Injectable()
export class LatestService {
  constructor(
    @InjectRepository(Latest)
    private readonly latestRepository: Repository<Latest>,
  ) { }
  
  async create(createLatestDto: CreateLatestDto) {
    return await this.latestRepository.save(createLatestDto);
  }

  async findAll() {
    const list = await this.latestRepository.find();
    const count = await this.latestRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        latestId: id,
      },
    };

    return this.latestRepository.findOne(options);
  }

  async update(id: number, updateLatestDto: UpdateLatestDto) {
    return this.latestRepository.update(id, updateLatestDto);
  }

  async remove(id: number) {
    return this.latestRepository.delete(id);
  }
}
