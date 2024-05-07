import { Injectable, Param } from '@nestjs/common';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';
import { Repository, Like } from 'typeorm';
import { Bookmark } from './entities/bookmark.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private readonly bookmarkRepository: Repository<Bookmark>,
  ) {}

  create(createBookmarkDto: CreateBookmarkDto) {
    return this.bookmarkRepository.save(createBookmarkDto);
  }

  async findAll(){
    const list = await this.bookmarkRepository.find({
      where: {},
      order: {
        bookmarkId: 'DESC',
      }
    });
    const count = await this.bookmarkRepository.count({
      where: {},
    });
    return {
      list,
      count,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} bookmark`;
  }

  update(id: number, updateBookmarkDto: UpdateBookmarkDto) {
    return `This action updates a #${id} bookmark`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookmark`;
  }
}
