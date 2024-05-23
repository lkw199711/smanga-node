/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 09:09:18
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 17:48:56
 * @FilePath: \smanga-node\src\login\entities\login.entity.ts
 */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('login', { schema: 'smanga' })
export class Login {
  @PrimaryGeneratedColumn({
    name: 'loginId',
    comment: '登录记录',
    unsigned: true,
  })
  loginId: number;

  @Column('int', {
    name: 'userId',
    nullable: true,
    unsigned: true,
    comment: '用户id',
  })
  userId: number;

  @Column('varchar', {
    name: 'userName',
    nullable: true,
    comment: '用户名',
  })
  userName: string | null;

  @Column('varchar', {
    name: 'nickName',
    nullable: true,
    comment: '昵称',
  })
  nickName: string | null;

  @Column('int', {
    name: 'request',
    nullable: false,
    unsigned: true,
    comment: '0->成功 1->失败',
  })
  request: number;

  @Column('varchar', {
    name: 'ip',
    nullable: false,
    comment: 'ip地址',
  })
  ip: string;

  @Column('varchar', {
    name: 'token',
    nullable: false,
    comment: 'token',
  })
  token: string;

  @Column('json', { nullable: true, comment: '代理信息' })
  userAgent: Record<string, unknown> | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
