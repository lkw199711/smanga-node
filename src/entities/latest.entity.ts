/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 19:25:21
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 17:48:40
 * @FilePath: \smanga-node\src\entities\latest.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('latest', { schema: 'smanga' })
export class Latest {
  @PrimaryGeneratedColumn({
    unsigned: true,
    comment: '最后阅读id',
  })
  latestId: number;

  @Column('int', { name: 'page', unsigned: true, comment: '页码' })
  page: number;

  @Column('int', {
    name: 'finish',
    comment: '已完成阅读',
    unsigned: true,
    default: () => 0,
  })
  finish: number;

  @Column('int', { name: 'chapterId', unsigned: true, comment: '章节id' })
  chapterId: number;

  @Column('int', { name: 'mangaId', unsigned: true, comment: '漫画id' })
  mangaId: number;

  @Column('int', { name: 'userId', unsigned: true, comment: '用户id' })
  userId: number;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
