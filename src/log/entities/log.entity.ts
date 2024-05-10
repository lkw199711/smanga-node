/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 19:25:18
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-09 20:24:20
 * @FilePath: \smanga-node\src\log\entities\log.entity.ts
 */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('log', { schema: 'smanga' })
export class Log {
  @PrimaryGeneratedColumn({
    name: 'logId',
    unsigned: true,
    comment: '日志id',
  })
  logId: number;

  @Column('int', {
    name: 'userId',
    nullable: true,
    unsigned: true,
    comment: '用户id',
  })
  userId: number | null;
  
  @Column('varchar', {
    name: 'logType',
    comment: '日志类型',
    default: () => "'process'",
  })
  logType: 'error' | 'process' | 'operate';

  @Column('int', {
    name: 'logLevel',
    nullable: false,
    unsigned: true,
    comment: '日志等级',
    default: () => 0,
  })
  logLevel: number;

  @Column('varchar', {
    name: 'module',
    nullable: true,
    comment: '模块名称',
  })
  module: string | null;

  @Column('varchar', {
    name: 'queue',
    nullable: true,
    comment: '队列名称',
  })
  queue: string | null;

  @Column('varchar', {
    name: 'message',
    nullable: false,
    comment: '日志内容',
  })
  message: string;

  @Column('text', {
    name: 'exception',
    nullable: true,
    comment: '代码错误日志',
  })
  exception: string | null;

  @Column('text', {
    name: 'version',
    nullable: false,
    comment: '版本号',
  })
  version: string;

  @Column('text', {
    name: 'environment',
    nullable: false,
    comment: '环境信息',
  })
  environment: string;

  @Column('json', { nullable: true, comment: '上下文信息' })
  context: Record<string, unknown> | null;

  @Column('json', { nullable: true, comment: '设备信息' })
  device: Record<string, unknown> | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
