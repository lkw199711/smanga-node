import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MangaTagService } from './manga-tag.service';
import { CreateMangaTagDto } from './dto/create-manga-tag.dto';
import { UpdateMangaTagDto } from './dto/update-manga-tag.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('manga-tag')
export class MangaTagController {
  constructor(private readonly mangaTagService: MangaTagService) {}

  @Post()
  async create(@Body() createMangaTagDto: CreateMangaTagDto) {
    const result = await this.mangaTagService.create(createMangaTagDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: result,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.mangaTagService.findAll();
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
    const result = await this.mangaTagService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '查询成功',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMangaTagDto: UpdateMangaTagDto) {
    const result = await this.mangaTagService.update(+id, updateMangaTagDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.mangaTagService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
