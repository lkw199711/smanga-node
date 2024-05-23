/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 17:56:42
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:08:10
 * @FilePath: \smanga-node\src\controllers\compress\compress.module.ts
 */
import { Module } from '@nestjs/common';
import { CompressService } from '../../services/compress.service';
import { CompressController } from './compress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compress } from 'src/entities/compress.entity';
import { UnzipService } from '../../services/compress.service';

@Module({
  imports: [TypeOrmModule.forFeature([Compress])],
  controllers: [CompressController],
  providers: [CompressService, UnzipService],
})
export class CompressModule {}
