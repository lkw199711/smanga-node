/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 17:33:34
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 17:51:11
 * @FilePath: \smanga-node\src\user\entities\user.entity.ts
 */
import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('username', ['userName'], { unique: true })
@Entity('user', { schema: 'smanga' })
export class User {
  @PrimaryGeneratedColumn({
    comment: '用户id',
    unsigned: true,
  })
  userId: number;

  @Column('varchar', {
    comment: '用户名',
  })
  userName: string;

  @Column('char', { comment: '密码', length: 32 })
  passWord: string;

  @Column('varchar', {
    nullable: true,
    comment: '昵称',
  })
  nickName: string | null;

  @Column('varchar', { nullable: true })
  header: string | null;

  @Column('varchar', { nullable: true })
  role:
    | 'admin'
    | 'userAdmin'
    | 'mediaAdmin'
    | 'serveAdmin'
    | 'systemAdmin'
    | null;

  @Column('varchar', { nullable: true })
  mediaPermit: string | 'all' | 'adult' | 'child' | null;

  @Column('json', { nullable: true })
  userConfig: Record<string, any> | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
