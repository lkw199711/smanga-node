/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 09:09:18
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-14 17:04:42
 * @FilePath: \smanga-node\src\login\login.controller.ts
 */
import { Controller,Req, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from '../../services/login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { ListResponse, SResponse } from 'src/interfaces/response.interface';
import { UserService } from 'src/services/user.service';
import { TokenService } from '../../services/login.service';
import { v4 as uuidv4 } from 'uuid';
import { Request } from 'express';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  @Post()
  async create(@Body() body: any, @Req() req: Request) {
    // 获取客户端ip
    const clientIp = req.ip || req.connection.remoteAddress;
    // 查询对应的用户信息
    const userInfo = await this.userService.findOne({
      userName: body.userName,
    });

    if (!userInfo) {
      return new SResponse({
        code: 1,
        message: '用户不存在',
      });
    }

    if (userInfo.passWord !== body.passWord) {
      return new SResponse({
        code: 1,
        message: '密码错误',
      });
    }

    const token = uuidv4();

    const saveLogin = await this.loginService.create({
      ...userInfo,
      request: 0,
      ip: clientIp,
      token,
    });
    const saveToken = await this.tokenService.create({
      userId: userInfo.userId,
      token,
    });

    const response = new SResponse({
      code: 0,
      message: '登录成功',
      data: saveLogin,
    });

    return response;
  }

  @Get()
  async findAll() {
    const listResponse = await this.loginService.findAll();
    const response = new ListResponse({
      code: 0,
      message: '',
      list: listResponse.list,
      count: listResponse.count,
    });

    return response;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.loginService.findOne(+id);
    const response = new SResponse({
      code: 0,
      message: '',
      data: result,
    });

    return response;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLoginDto: UpdateLoginDto,
  ) {
    const result = await this.loginService.update(+id, updateLoginDto);
    const response = new SResponse({
      code: 0,
      message: '更新成功',
      data: result,
    });

    return response;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.loginService.remove(+id);
    const response = new SResponse({
      code: 0,
      message: '删除成功',
      data: result,
    });

    return response;
  }
}
