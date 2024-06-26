/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 17:56:42
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 17:47:59
 * @FilePath: \smanga-node\src\entities\compress.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('id', ['compressId'], { unique: true })
@Index('oChapter', ['chapterId'], { unique: true })
@Entity('compress', { schema: 'smanga' })
export class Compress {
  @PrimaryGeneratedColumn({
    comment: '转换id',
    unsigned: true,
  })
  compressId: number;

  @Column({
    name: 'compressType',
    nullable: false,
    comment: '转换类型',
  })
  compressType: 'zip' | 'rar' | 'pdf' | 'image' | '7z' | 'cbz' | 'cbr';

  @Column('varchar', {
    name: 'compressPath',
    nullable: false,
    comment: '转换路径',
  })
  compressPath: string;

  @Column({
    name: 'compressStatus',
    nullable: true,
    comment: '转换状态',
  })
  compressStatus: 'uncompressed' | 'compressing' | 'compressed' | null;

  @Column('int', {
    name: 'imageCount',
    nullable: true,
    unsigned: true,
    comment: '图片总数',
  })
  imageCount: number | null;

  @Column('int', {
    name: 'mediaId',
    nullable: false,
    unsigned: true,
    comment: '媒体库id',
  })
  mediaId: number;

  @Column('int', {
    name: 'mangaId',
    nullable: false,
    unsigned: true,
    comment: '漫画id',
  })
  mangaId: number;

  @Column('int', {
    name: 'chapterId',
    nullable: false,
    unsigned: true,
    unique: true,
    comment: '章节id',
  })
  chapterId: number;

  @Column('varchar', {
    name: 'chapterPath',
    nullable: false,
    comment: '章节路径',
  })
  chapterPath: string;

  @Column('int', {
    name: 'userId',
    nullable: true,
    unsigned: true,
    comment: '用户标识',
  })
  userId: number | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
