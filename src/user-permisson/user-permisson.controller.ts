import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserPermissonService } from './user-permisson.service';
import { CreateUserPermissonDto } from './dto/create-user-permisson.dto';
import { UpdateUserPermissonDto } from './dto/update-user-permisson.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';

@Controller('user-permisson')
export class UserPermissonController {
  constructor(private readonly userPermissonService: UserPermissonService) {}

  @Post()
  async create(@Body() createUserPermissonDto: CreateUserPermissonDto) {
    const result = await this.userPermissonService.create(createUserPermissonDto);
    const response = new SResponse({
      code: 0,
      message: '新增成功',
      data: result,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.userPermissonService.findAll();
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
    const result = await this.userPermissonService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '查询成功',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserPermissonDto: UpdateUserPermissonDto) {
    const result = await this.userPermissonService.update(+id, updateUserPermissonDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.userPermissonService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
