import { Injectable } from '@nestjs/common';
import { CreateMangaDto } from './dto/create-manga.dto';
import { UpdateMangaDto } from './dto/update-manga.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Manga } from './entities/manga.entity';

@Injectable()
export class MangaService {
  constructor(
    @InjectRepository(Manga)
    private readonly mangaRepository: Repository<Manga>,
  ) { }

  async create(createMangaDto: CreateMangaDto) {
    return await this.mangaRepository.save(createMangaDto);
  }

  async findAll() {
    const list = await this.mangaRepository.find();
    const count = await this.mangaRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        mangaId: id,
      },
    };

    return this.mangaRepository.findOne(options);
  }

  async update(id: number, updateMangaDto: UpdateMangaDto) {
    return this.mangaRepository.update(id, updateMangaDto);
  }

  async remove(id: number) {
    return this.mangaRepository.delete(id);
  }
}
