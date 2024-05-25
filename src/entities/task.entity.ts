/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-21 10:29:39
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-25 15:17:32
 * @FilePath: \smanga-node\src\task\entities\task.entity.ts
 */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('task', { schema: 'smanga' })
export class Task {
  @PrimaryGeneratedColumn({ unsigned: true, comment: '任务主键' })
  taskId: number;

  @Column('varchar', { default: "'default'", comment: '任务名称' })
  taskName: string | 'delete' | 'scan' | 'compress' | 'default';

  @Column('int', { default: 10, comment: '任务优先级' })
  priority: string;

  @Column('varchar', { default: 'pending', comment: '任务状态' })
  status: string;

  @Column('text', { comment: '任务命令' })
  command: string;

  @Column('json', { nullable: true, comment: '任务参数' })
  args: any | null;

  @Column({ type: 'timestamp', nullable: true, comment: '任务开始时间' })
  startTime: Date;

  @Column({ type: 'timestamp', nullable: true, comment: '任务结束时间' })
  endTime: Date;

  @Column('text', { nullable: true, comment: '任务错误信息' })
  error: string | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
