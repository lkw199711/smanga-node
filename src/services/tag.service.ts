import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../controllers/tag/dto/create-tag.dto';
import { UpdateTagDto } from '../controllers/tag/dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from '../entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) { }
  
  async create(createTagDto: CreateTagDto) {
    return await this.tagRepository.save(createTagDto);
  }

  async findAll(page: number, pageSize: number) {
    const options = {
      take: pageSize,
      skip: (page - 1) * pageSize,
    };
    
    const list = await this.tagRepository.find(page ? options : {});
    const count = await this.tagRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        tagId: id,
      },
    };

    return this.tagRepository.findOne(options);
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    return this.tagRepository.update(id, updateTagDto);
  }

  async remove(id: number) {
    return this.tagRepository.delete(id);
  }
}
