/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 10:44:31
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-10 10:45:24
 * @FilePath: \smanga-node\src\meta\entities\meta.entity.ts
 */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('meta', { schema: 'smanga' })
export class Meta {
  @PrimaryGeneratedColumn({ comment: '元数据id', unsigned: true })
  metaId: number;

  @Column('varchar', { nullable: false, comment: '元数据类型' })
  metaType: string;

  @Column('int', { nullable: false, unsigned: true, comment: '漫画id' })
  mangaId: number;

  @Column('varchar', { nullable: true, comment: '元数据文件' })
  metaFile: string | null;

  @Column('varchar', { nullable: true, comment: '元数据内容' })
  metaContent: string | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
