/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:05:07
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-10 19:10:03
 * @FilePath: \smanga-node\src\media\entities\media.entity.ts
 */
import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('name', ['mediaName'], { unique: true })
@Index('nameId', ['mediaId', 'mediaName'], { unique: true })
@Entity('media', { schema: 'smanga' })
export class Media {
  @PrimaryGeneratedColumn({
    comment: '媒体库id',
    unsigned: true,
  })
  mediaId: number;

  @Column('varchar', {
    unique: true,
    comment: '媒体库名称',
  })
  mediaName: string;

  @Column('int', { unsigned: true, comment: '媒体库类型 0->漫画 1->单本' })
  mediaType: number;

  @Column('varchar', {
    unique: true,
    comment: '媒体库分级',
    default: () => "'child'",
  })
  mediaRating: string;

  @Column('varchar', {
    nullable: true,
    comment: '媒体库封面',
  })
  mediaCover: string | null;

  @Column('int', {
    nullable: false,
    unsigned: true,
    comment:
      '目录格式 \r\n0 漫画 -> 章节 -> 图片\r\n1 目录 -> 漫画 -> 章节 -> 图片\r\n2 漫画 -> 图片\r\n3 目录 -> 漫画 -> 图片\r\n\r\n23为单本',
    default: () => "'0'",
  })
  directoryFormat: number;

  @Column('varchar', {
    comment: '默认浏览类型',
    default: () => "'flow'",
  })
  browseType: 'flow' | 'single' | 'double' | 'half';

  @Column('int', {
    unsigned: true,
    comment: '翻页方向 0 左到右; 1右到左',
    default: () => "'1'",
  })
  direction: number;

  @Column('int', {
    unsigned: true,
    comment: '剔除首页',
    default: () => "'0'",
  })
  removeFirst: number;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
