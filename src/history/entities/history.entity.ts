/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 18:40:43
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-09 18:43:32
 * @FilePath: \smanga-node\src\history\entities\history.entity.ts
 */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('history', { schema: 'smanga' })
export class History {
  @PrimaryGeneratedColumn({
    comment: '历史记录id',
    unsigned: true,
  })
  historyId: number;

  @Column('int', {
    name: 'userid',
    nullable: false,
    unsigned: true,
    comment: '用户id',
  })
  userid: number;

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

  @Column('varchar', {
    name: 'mangaName',
    nullable: true,
    comment: '漫画名称',
  })
  mangaName: string | null;

  @Column('int', {
    name: 'chapterId',
    nullable: false,
    unsigned: true,
    comment: '章节id',
  })
  chapterId: number;

  @Column('varchar', {
    name: 'chapterName',
    nullable: true,
    comment: '章节名称',
  })
  chapterName: string | null;

  @Column('varchar', {
    name: 'chapterPath',
    nullable: true,
    comment: '章节路径',
  })
  chapterPath: string | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
