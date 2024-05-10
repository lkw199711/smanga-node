import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserPermissonService } from './user-permisson.service';
import { CreateUserPermissonDto } from './dto/create-user-permisson.dto';
import { UpdateUserPermissonDto } from './dto/update-user-permisson.dto';

@Controller('user-permisson')
export class UserPermissonController {
  constructor(private readonly userPermissonService: UserPermissonService) {}

  @Post()
  create(@Body() createUserPermissonDto: CreateUserPermissonDto) {
    return this.userPermissonService.create(createUserPermissonDto);
  }

  @Get()
  findAll() {
    return this.userPermissonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPermissonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserPermissonDto: UpdateUserPermissonDto) {
    return this.userPermissonService.update(+id, updateUserPermissonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userPermissonService.remove(+id);
  }
}
