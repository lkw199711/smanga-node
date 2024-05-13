import { Injectable } from '@nestjs/common';
import { CreateMetaDto } from './dto/create-meta.dto';
import { UpdateMetaDto } from './dto/update-meta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meta } from './entities/meta.entity';

@Injectable()
export class MetaService {
  constructor(
    @InjectRepository(Meta)
    private readonly metaRepository: Repository<Meta>,
  ) { }
  
  async create(createMetaDto: CreateMetaDto) {
    return await this.metaRepository.save(createMetaDto);
  }

  async findAll() {
    const list = await this.metaRepository.find();
    const count = await this.metaRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        metaId: id,
      },
    };

    return this.metaRepository.findOne(options);
  }

  async update(id: number, updateMetaDto: UpdateMetaDto) {
    return this.metaRepository.update(id, updateMetaDto);
  }

  async remove(id: number) {
    return this.metaRepository.delete(id);
  }
}
