import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MangaTagService } from './manga-tag.service';
import { CreateMangaTagDto } from './dto/create-manga-tag.dto';
import { UpdateMangaTagDto } from './dto/update-manga-tag.dto';

@Controller('manga-tag')
export class MangaTagController {
  constructor(private readonly mangaTagService: MangaTagService) {}

  @Post()
  create(@Body() createMangaTagDto: CreateMangaTagDto) {
    return this.mangaTagService.create(createMangaTagDto);
  }

  @Get()
  findAll() {
    return this.mangaTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mangaTagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMangaTagDto: UpdateMangaTagDto) {
    return this.mangaTagService.update(+id, updateMangaTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mangaTagService.remove(+id);
  }
}
