/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-08 18:57:01
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-08 19:22:43
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
  @PrimaryGeneratedColumn()
  chapterId: number;

  @Column('int', { name: 'mangaId', nullable: false, comment: '漫画id' })
  mangaId: number;

  @Column('int', { name: 'mediaId', nullable: false, comment: '媒体库id' })
  mediaId: number;

  @Column('int', { name: 'pathId', nullable: false, comment: '路径id' })
  pathId: number;

  @Column('varchar', {
    name: 'chapterName',
    nullable: false,
    comment: '章节名称',
    length: 191,
  })
  chapterName: string;

  @Column('varchar', {
    name: 'chapterPath',
    nullable: false,
    comment: '章节路径',
    length: 191,
  })
  chapterPath: string;

  @Column('varchar', {
    name: 'chapterType',
    nullable: false,
    comment: '文件类型',
    length: 191,
    default: 'image',
  })
  chapterType: string;

  @Column({ default: 'flow' })
  browseType: 'flow' | 'single' | 'double' | 'half';

  @Column('varchar', {
    name: 'chapterCover',
    nullable: true,
    comment: '章节封面',
    length: 191,
  })
  chapterCover: string | null;

  @Column('varchar', {
    name: 'subTitle',
    nullable: true,
    comment: '副标题 用于搜索',
    length: 255,
  })
  subTitle: string | null;

  @Column('int', { name: 'picNum', nullable: true, comment: '图片数量' })
  picNum: number | null;

  @CreateDateColumn({ type: 'datetime' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updateTime: Date;
}
