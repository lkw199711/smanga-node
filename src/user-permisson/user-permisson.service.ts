import { Injectable } from '@nestjs/common';
import { CreateUserPermissonDto } from './dto/create-user-permisson.dto';
import { UpdateUserPermissonDto } from './dto/update-user-permisson.dto';

@Injectable()
export class UserPermissonService {
  create(createUserPermissonDto: CreateUserPermissonDto) {
    return 'This action adds a new userPermisson';
  }

  findAll() {
    return `This action returns all userPermisson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPermisson`;
  }

  update(id: number, updateUserPermissonDto: UpdateUserPermissonDto) {
    return `This action updates a #${id} userPermisson`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPermisson`;
  }
}
