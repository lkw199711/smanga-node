import { Injectable } from '@nestjs/common';
import { CreateMangaTagDto } from './dto/create-manga-tag.dto';
import { UpdateMangaTagDto } from './dto/update-manga-tag.dto';

@Injectable()
export class MangaTagService {
  create(createMangaTagDto: CreateMangaTagDto) {
    return 'This action adds a new mangaTag';
  }

  findAll() {
    return `This action returns all mangaTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mangaTag`;
  }

  update(id: number, updateMangaTagDto: UpdateMangaTagDto) {
    return `This action updates a #${id} mangaTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} mangaTag`;
  }
}
