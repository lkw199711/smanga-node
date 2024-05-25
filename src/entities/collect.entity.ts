/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 14:13:29
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 17:47:39
 * @FilePath: \smanga-node\src\entities\collect.entity.ts
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

@Index('uChapter', ['collectType', 'chapterId'], { unique: true })
@Index('uManga', ['collectType', 'mangaId'], { unique: true })
@Entity('collect', { schema: 'smanga' })
export class Collect {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'collectId',
    unsigned: true,
    comment: '收藏id',
  })
  collectId: number;

  @Column('varchar', {
    name: 'collectType',
    nullable: false,
    comment: '收藏类型',
    length: 255,
    default: 'manga',
  })
  collectType: string;

  @Column('int', { name: 'userId', unsigned: true, comment: '用户id' })
  userId: number;

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
    length: 255,
  })
  mangaName: string | null;

  @Column('int', {
    name: 'chapterId',
    nullable: true,
    unsigned: true,
    comment: '章节id',
  })
  chapterId: number | null;

  @Column('varchar', {
    name: 'chapterName',
    nullable: true,
    comment: '章节名称',
    length: 255,
  })
  chapterName: string | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
