import { Injectable } from '@nestjs/common';
import { CreateMangaTagDto } from './dto/create-manga-tag.dto';
import { UpdateMangaTagDto } from './dto/update-manga-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MangaTag } from './entities/manga-tag.entity';

@Injectable()
export class MangaTagService {
  constructor(
    @InjectRepository(MangaTag)
    private readonly mangaTagRepository: Repository<MangaTag>,
  ) { }

  async create(createMangaTagDto: CreateMangaTagDto) {
    return await this.mangaTagRepository.save(createMangaTagDto);
  }

  async findAll() {
    const list = await this.mangaTagRepository.find();
    const count = await this.mangaTagRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        mangaTagId: id,
      },
    };

    return this.mangaTagRepository.findOne(options);
  }

  async update(id: number, updateMangaTagDto: UpdateMangaTagDto) {
    return this.mangaTagRepository.update(id, updateMangaTagDto);
  }

  async remove(id: number) {
    return this.mangaTagRepository.delete(id);
  }
}
