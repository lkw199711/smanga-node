import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Post()
  async create(@Body() createChapterDto: CreateChapterDto) {
    const saveChapter = await this.chapterService.create(createChapterDto);
    const response = new SResponse({
      code: 0,
      message: '创建成功',
      data: saveChapter,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.chapterService.findAll();
    const response = new ListResponse({
      code: 0,
      message: '查询成功',
      list: listResponse.list,
      count: listResponse.count,
    });

    return response;
  }

  @Get(':chapterId')
  async findOne(@Param('chapterId') chapterId: string) {
    const chapterTarget = await this.chapterService.findOne(+chapterId);
    const response = new SResponse({
      code: 0,
      message: '查询成功',
      data: chapterTarget,
    });

    return response;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateChapterDto: UpdateChapterDto,
  ) {
    const res = await this.chapterService.update(+id, updateChapterDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: res,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const res = await this.chapterService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: res,
    });

    return response;
  }
}
