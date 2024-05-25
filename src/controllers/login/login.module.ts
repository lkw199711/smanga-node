/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 09:09:18
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:17:30
 * @FilePath: \smanga-node\src\login\login.module.ts
 */
import { Module } from '@nestjs/common';
import { LoginService } from '../../services/login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from 'src/entities/login.entity';
import { Token } from 'src/entities/token.entity';
import { TokenService } from '../../services/login.service';
import { SqlModule } from 'src/modules/sql.module';

@Module({
  imports: [SqlModule, TypeOrmModule.forFeature([Login, Token])],
  controllers: [LoginController],
  providers: [LoginService, TokenService],
  exports: [TokenService],
})
export class LoginModule {}
