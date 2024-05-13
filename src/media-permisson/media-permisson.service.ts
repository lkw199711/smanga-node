import { Injectable } from '@nestjs/common';
import { CreateMediaPermissonDto } from './dto/create-media-permisson.dto';
import { UpdateMediaPermissonDto } from './dto/update-media-permisson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MediaPermisson } from './entities/media-permisson.entity';

@Injectable()
export class MediaPermissonService {
  constructor(
    @InjectRepository(MediaPermisson)
    private readonly mediaPermissonRepository: Repository<MediaPermisson>,
  ) { }
  
  async create(createMediaPermissonDto: CreateMediaPermissonDto) {
    return await this.mediaPermissonRepository.save(createMediaPermissonDto);
  }

  async findAll() {
    const list = await this.mediaPermissonRepository.find();
    const count = await this.mediaPermissonRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        mediaPermissonId: id,
      },
    };

    return this.mediaPermissonRepository.findOne(options);
  }

  async update(id: number, updateMediaPermissonDto: UpdateMediaPermissonDto) {
    return this.mediaPermissonRepository.update(id, updateMediaPermissonDto);
  }

  async remove(id: number) {
    return this.mediaPermissonRepository.delete(id);
  }
}
