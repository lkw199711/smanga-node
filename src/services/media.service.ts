import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from '../controllers/media/dto/create-media.dto';
import { UpdateMediaDto } from '../controllers/media/dto/update-media.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from '../entities/media.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
  ) {}

  async create(createMediaDto: CreateMediaDto) {
    return await this.mediaRepository.save(createMediaDto);
  }

  async findAll(page, pageSize) {
    const options = {
      skip: (page - 1) * pageSize,
      take: pageSize,
    };
    const list = await this.mediaRepository.find(page ? options : {});
    const count = await this.mediaRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        mediaId: id,
      },
    };

    return this.mediaRepository.findOne(options);
  }

  async update(id: number, updateMediaDto: UpdateMediaDto) {
    return this.mediaRepository.update(id, updateMediaDto);
  }

  async remove(id: number) {
    return this.mediaRepository.delete(id);
  }
}
