import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LatestService } from './latest.service';
import { CreateLatestDto } from './dto/create-latest.dto';
import { UpdateLatestDto } from './dto/update-latest.dto';

@Controller('latest')
export class LatestController {
  constructor(private readonly latestService: LatestService) {}

  @Post()
  create(@Body() createLatestDto: CreateLatestDto) {
    return this.latestService.create(createLatestDto);
  }

  @Get()
  findAll() {
    return this.latestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.latestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLatestDto: UpdateLatestDto) {
    return this.latestService.update(+id, updateLatestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.latestService.remove(+id);
  }
}
