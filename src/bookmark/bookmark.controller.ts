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
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('bookmark')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post()
  async create(@Body() createBookmarkDto: CreateBookmarkDto) {
    const saveBookmark = await this.bookmarkService.create(createBookmarkDto);
    const response = new SResponse({
      code: 0,
      message: '创建成功',
      data: saveBookmark,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.bookmarkService.findAll();
    const response = new ListResponse({
      code: 0,
      message: '查询成功',
      list: listResponse.list,
      count: listResponse.count,
    });

    return response;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const bookmarkTarget = await this.bookmarkService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '查询成功',
      data: bookmarkTarget,
    });

    return response;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookmarkDto: UpdateBookmarkDto,
  ) {
    const res = await this.bookmarkService.update(+id, updateBookmarkDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: res,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const res = await this.bookmarkService.remove(+id);
    return {
      code: 0,
      message: '删除成功',
      data: res,
    };
  }
}
