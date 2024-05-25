import { Injectable } from '@nestjs/common';
import { CreateUserPermissonDto } from '../controllers/user-permisson/dto/create-user-permisson.dto';
import { UpdateUserPermissonDto } from '../controllers/user-permisson/dto/update-user-permisson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPermisson } from '../entities/user-permisson.entity';

@Injectable()
export class UserPermissonService {
  constructor(
    @InjectRepository(UserPermisson)
    private readonly userPermissonRepository: Repository<UserPermisson>,
  ) { }

  async create(createUserPermissonDto: CreateUserPermissonDto) {
    return await this.userPermissonRepository.save(createUserPermissonDto);
  }

  async findAll() {
    const list = await this.userPermissonRepository.find();
    const count = await this.userPermissonRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        userPermissonId: id,
      },
    };

    return this.userPermissonRepository.findOne(options);
  }

  async update(id: number, updateUserPermissonDto: UpdateUserPermissonDto) {
    return this.userPermissonRepository.update(id, updateUserPermissonDto);
  }

  async remove(id: number) {
    return this.userPermissonRepository.delete(id);
  }
}
