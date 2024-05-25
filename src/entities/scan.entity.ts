/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 11:25:56
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-24 20:51:01
 * @FilePath: \smanga-node\src\scan\entities\scan.entity.ts
 */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('scan', { schema: 'smanga' })
export class Scan {
  @PrimaryGeneratedColumn({
    comment: '扫描id',
    unsigned: true,
  })
  scanId: number;

  @Column('varchar', {
    comment: 'start|scaning|finish',
  })
  scanStatus: string;

  @Column('varchar', {
    comment: '路径',
  })
  pathContent: string;

  @Column('varchar', {
    nullable: true,
    comment: '正在扫描的二级路径',
  })
  targetPath: string | null;

  @Column('int', {
    primary: true,
    unsigned: true,
    comment: '路径id 第二主键',
  })
  pathId: number;

  @Column('int', { nullable: true, unsigned: true, comment: '扫描目标总数' })
  scanCount: number | null;

  @Column('int', {
    name: 'scanIndex',
    nullable: true,
    default: () => 0,
    comment: '正在扫描的进度',
  })
  scanCompleted: number;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
