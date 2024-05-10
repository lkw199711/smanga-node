/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:44:31
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-10 18:51:28
 * @FilePath: \smanga-node\src\meta\meta.module.ts
 */
import { Module } from '@nestjs/common';
import { MetaService } from './meta.service';
import { MetaController } from './meta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meta } from './entities/meta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meta])],
  controllers: [MetaController],
  providers: [MetaService],
})
export class MetaModule {}
