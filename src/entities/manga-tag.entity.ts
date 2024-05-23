/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:03:52
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 17:49:24
 * @FilePath: \smanga-node\src\entities\manga-tag.entity.ts
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

@Index('manga-tag', ['mangaId', 'tagId'], { unique: true })
@Entity('manga-tag', { schema: 'smanga' })
export class MangaTag {
  @PrimaryGeneratedColumn({
    unsigned: true,
    comment: '漫画关联标签主键',
  })
  mangaTagId: number;

  @Column('int', { nullable: false, unsigned: true, comment: '漫画id' })
  mangaId: number;

  @Column('int', { nullable: false, unsigned: true, comment: '标签id' })
  tagId: number;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
