import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompressService } from './compress.service';
import { CreateCompressDto } from './dto/create-compress.dto';
import { UpdateCompressDto } from './dto/update-compress.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('compress')
export class CompressController {
  constructor(private readonly compressService: CompressService) {}

  @Post()
  async create(@Body() createCompressDto: CreateCompressDto) {
    const result = await this.compressService.create(createCompressDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: result,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.compressService.findAll();
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
    const result = await this.compressService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '查询成功',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCompressDto: UpdateCompressDto) {
    const result = await this.compressService.update(+id, updateCompressDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.compressService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
