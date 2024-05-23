/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-07 11:32:42
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 19:09:06
 * @FilePath: \smanga-node\src\bookmark\bookmark.module.ts
 * @Description: 书签模块
 */
import { Module } from '@nestjs/common';
import { BookmarkService } from '../../services/bookmark.service';
import { BookmarkController } from './bookmark.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from 'src/entities/bookmark.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Bookmark])],
  controllers: [BookmarkController],
  providers: [BookmarkService],
})
export class BookmarkModule {}
