/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-08 18:57:01
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 17:47:23
 * @FilePath: \smanga-node\src\chapter\entities\chapter.entity.ts
 * @Description: 章节表实体
 */
import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('oname', ['mangaId', 'chapterName'], { unique: true })
@Entity('chapter', { schema: 'smanga' })
export class Chapter {
  @PrimaryGeneratedColumn({ unsigned: true, comment: '章节id' })
  chapterId: number;

  @Column('int', {
    name: 'mangaId',
    unsigned: true,
    nullable: false,
    comment: '漫画id',
  })
  mangaId: number;

  @Column('int', {
    name: 'mediaId',
    nullable: false,
    unsigned: true,
    comment: '媒体库id',
  })
  mediaId: number;

  @Column('int', {
    name: 'pathId',
    nullable: false,
    unsigned: true,
    comment: '路径id',
  })
  pathId: number;

  @Column('varchar', {
    name: 'chapterName',
    nullable: false,
    comment: '章节名称',
  })
  chapterName: string;

  @Column('varchar', {
    name: 'chapterPath',
    nullable: false,
    comment: '章节路径',
  })
  chapterPath: string;

  @Column('varchar', {
    name: 'chapterType',
    nullable: false,
    comment: '文件类型',
    default: 'image',
  })
  chapterType: string;

  @Column({ default: 'flow', comment: '浏览类型' })
  browseType: 'flow' | 'single' | 'double' | 'half';

  @Column('varchar', {
    name: 'chapterCover',
    nullable: true,
    comment: '章节封面',
  })
  chapterCover: string | null;

  @Column('varchar', {
    name: 'subTitle',
    nullable: true,
    comment: '副标题 用于搜索',
  })
  subTitle: string | null;

  @Column('int', {
    name: 'picNum',
    nullable: true,
    unsigned: true,
    comment: '图片数量',
  })
  picNum: number | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
