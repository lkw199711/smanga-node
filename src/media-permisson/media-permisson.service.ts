import { Injectable } from '@nestjs/common';
import { CreateMediaPermissonDto } from './dto/create-media-permisson.dto';
import { UpdateMediaPermissonDto } from './dto/update-media-permisson.dto';

@Injectable()
export class MediaPermissonService {
  create(createMediaPermissonDto: CreateMediaPermissonDto) {
    return 'This action adds a new mediaPermisson';
  }

  findAll() {
    return `This action returns all mediaPermisson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediaPermisson`;
  }

  update(id: number, updateMediaPermissonDto: UpdateMediaPermissonDto) {
    return `This action updates a #${id} mediaPermisson`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediaPermisson`;
  }
}
