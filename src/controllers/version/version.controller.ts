import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VersionService } from '../../services/version.service';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('version')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Post()
  async create(@Body() createVersionDto: CreateVersionDto) {
    const result = await this.versionService.create(createVersionDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: result,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.versionService.findAll();
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
    const result = await this.versionService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '查询成功',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVersionDto: UpdateVersionDto) {
    const result = await this.versionService.update(+id, updateVersionDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.versionService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
