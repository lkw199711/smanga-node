/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:57:47
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 17:50:48
 * @FilePath: \smanga-node\src\path\entities\path.entity.ts
 */
import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('opath', ['mediaId', 'path'], { unique: true })
@Entity('path', { schema: 'smanga' })
export class Path {
  @PrimaryGeneratedColumn({
    comment: '路径id',
    unsigned: true,
  })
  pathId: number;

  @Column('int', { unsigned: true, comment: '媒体库id' })
  mediaId: number;

  @Column('varchar', {
    nullable: true,
    comment: '路径类型(主要目录|附属目录)',
  })
  pathType: string | null;

  @Column('varchar', { comment: '路径' })
  path: string;

  @Column('int', { unsigned: true, comment: '自动扫描', default: () => "'0'" })
  autoScan: number;

  @Column('varchar', {
    nullable: true,
    comment: '包含匹配',
  })
  include: string | null;

  @Column('varchar', {
    nullable: true,
    comment: '排除匹配',
  })
  exclude: string | null;

  @Column('datetime', {
    nullable: true,
    comment: '上次扫描时间',
  })
  lastScanTime: Date | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
