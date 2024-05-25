/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 09:09:18
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-14 16:10:29
 * @FilePath: \smanga-node\src\login\login.service.ts
 */
import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from '../controllers/login/dto/create-login.dto';
import { UpdateLoginDto } from '../controllers/login/dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from '../entities/login.entity';
import { Token } from '../entities/token.entity';

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

@Injectable()
export class TokenService { 
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) { }
  
  async create(createTokenDto: any) {
    return await this.tokenRepository.save(createTokenDto);
  }

  async findAll() {
    const list = await this.tokenRepository.find();
    const count = await this.tokenRepository.count();

    return {
      list,
      count,
    };
  }

  async findOne(where: any) {
    const options = {
      where,
    };

    return this.tokenRepository.findOne(options);
  }

  async remove(id: number) {
    return this.tokenRepository.delete(id);
  }
}