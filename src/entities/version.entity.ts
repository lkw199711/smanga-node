/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 17:11:32
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 17:51:24
 * @FilePath: \smanga-node\src\version\entities\version.entity.ts
 */
import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('version', ['version'], { unique: true })
@Entity('version', { schema: 'smanga' })
export class Version {
  @PrimaryGeneratedColumn({
    comment: '版本id',
    unsigned: true,
  })
  versionId: number;

  @Column('varchar', {
    unique: true,
    comment: '版本号',
  })
  version: string;

  @Column('varchar', {
    nullable: true,
    comment: '版本描述',
  })
  description: string | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
