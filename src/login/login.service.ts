import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) { }
  
  async create(createLoginDto: CreateLoginDto) {
    return await this.loginRepository.save(createLoginDto);
  }

  async findAll() {
    const list = await this.loginRepository.find();
    const count = await this.loginRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(id: number) {
    const options = {
      where: {
        loginId: id,
      },
    };

    return this.loginRepository.findOne(options);
  }

  async update(id: number, updateLoginDto: UpdateLoginDto) {
    return this.loginRepository.update(id, updateLoginDto);
  }

  async remove(id: number) {
    return this.loginRepository.delete(id);
  }
}
