import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';
import { SResponse } from 'src/interfaces/response.interface';

@Controller('bookmark')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post()
  async create(@Body() createBookmarkDto: CreateBookmarkDto) {

      const saveBookmark = await this.bookmarkService.create(createBookmarkDto);

      const response: SResponse = {
        code: 0,
        message: '添加成功',
        data: saveBookmark,
      };

      return response;

  }

  @Get()
  findAll() {
    return this.bookmarkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookmarkService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookmarkDto: UpdateBookmarkDto,
  ) {
    return this.bookmarkService.update(+id, updateBookmarkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const res = this.bookmarkService.remove(+id);
    return {
      code: 0,
      message: '删除成功',
      data: res,
    };
  }
}
