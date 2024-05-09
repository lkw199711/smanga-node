/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-07 11:32:42
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-09 10:15:08
 * @FilePath: \smanga-node\src\bookmark\entities\bookmark.entity.ts
 * @Description: 书签表实体
 */
import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('opage', ['chapterId', 'page'], { unique: true })
@Entity('bookmark', { schema: 'smanga' })
export class Bookmark {
  @PrimaryGeneratedColumn({ unsigned: true, comment: '书签id' })
  bookmarkId: number;

  @Column('int', {
    name: 'mediaId',
    nullable: false,
    unsigned: true,
    comment: '媒体库id',
  })
  mediaId: number;

  @Column('int', {
    name: 'mangaId',
    unsigned: true,
    nullable: false,
    comment: '漫画id',
  })
  mangaId: number;

  @Column('int', {
    name: 'chapterId',
    nullable: false,
    unsigned: true,
    comment: '章节id',
  })
  chapterId: number;

  @Column('int', {
    name: 'userId',
    nullable: false,
    unsigned: true,
    comment: '用户id',
  })
  userId: number;

  @Column({ default: 'flow', comment: '浏览类型' })
  browseType: 'flow' | 'single' | 'double' | 'half';

  @Column('int', {
    name: 'page',
    nullable: false,
    unsigned: true,
    comment: '页码',
  })
  page: number;

  @Column('varchar', {
    name: 'pageImage',
    nullable: true,
    comment: '书签封面图片',
  })
  pageImage: string | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
