/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 11:25:56
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-24 10:19:58
 * @FilePath: \smanga-node\src\controllers\scan\scan.controller.ts
 */
import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ScanService } from '../../services/scan.service';
import { CreateScanDto } from './dto/create-scan.dto';
import { UpdateScanDto } from './dto/update-scan.dto';

@Controller('scan')
export class ScanController {
  constructor(private readonly scanService: ScanService) {}

  @Post()
  create(@Body() createScanDto: CreateScanDto) {
    return this.scanService.create(createScanDto);
  }

  @Get()
  findAll() {
    return this.scanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScanDto: UpdateScanDto) {
    return this.scanService.update(+id, updateScanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scanService.remove(+id);
  }
}
