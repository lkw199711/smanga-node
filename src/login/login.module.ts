/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 09:09:18
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-16 16:51:13
 * @FilePath: \smanga-node\src\login\login.module.ts
 */
import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { Token } from './entities/token.entity';
import { UserModule } from 'src/user/user.module';
import { TokenService } from './login.service';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([Login, Token])],
  controllers: [LoginController],
  providers: [LoginService, TokenService],
  exports: [TokenService],
})
export class LoginModule {}
