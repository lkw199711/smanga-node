import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MediaPermissonService } from './media-permisson.service';
import { CreateMediaPermissonDto } from './dto/create-media-permisson.dto';
import { UpdateMediaPermissonDto } from './dto/update-media-permisson.dto';

@Controller('media-permisson')
export class MediaPermissonController {
  constructor(private readonly mediaPermissonService: MediaPermissonService) {}

  @Post()
  create(@Body() createMediaPermissonDto: CreateMediaPermissonDto) {
    return this.mediaPermissonService.create(createMediaPermissonDto);
  }

  @Get()
  findAll() {
    return this.mediaPermissonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaPermissonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediaPermissonDto: UpdateMediaPermissonDto) {
    return this.mediaPermissonService.update(+id, updateMediaPermissonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaPermissonService.remove(+id);
  }
}
