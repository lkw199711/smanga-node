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

  async findAll() {
    const list = await this.pathRepository.find();
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
