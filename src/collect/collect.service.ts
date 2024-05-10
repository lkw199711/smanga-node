import { Injectable } from '@nestjs/common';
import { CreateCollectDto } from './dto/create-collect.dto';
import { UpdateCollectDto } from './dto/update-collect.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collect } from './entities/collect.entity';

@Injectable()
export class CollectService {
  constructor(
    @InjectRepository(Collect)
    private readonly collectRepository: Repository<Collect>,
  ) {}

  create(createCollectDto: CreateCollectDto) {
    return this.collectRepository.save(createCollectDto);
  }

  async findAll() {
    const list = await this.collectRepository.find({
      where: {},
      order: {
        collectId: 'DESC',
      },
    });
    const count = await this.collectRepository.count({
      where: {},
    });
    return {
      list,
      count,
    };
  }

  findOne(id: number) {
    const options = {
      where: {
        collectId: id,
      },
    };

    return this.collectRepository.findOne(options);
  }

  update(id: number, updateCollectDto: UpdateCollectDto) {
    return this.collectRepository.update(id, updateCollectDto);
  }

  remove(id: number) {
    return this.collectRepository.delete(id);
  }
}
