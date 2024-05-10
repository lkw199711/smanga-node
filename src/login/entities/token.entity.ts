import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('token', { schema: 'smanga' })
export class Token {
  @PrimaryGeneratedColumn({
    name: 'tokenId',
    comment: '令牌id',
    unsigned: true,
  })
  tokenId: number;

  @Column('int', {
    name: 'userId',
    nullable: false,
    unsigned: true,
    comment: '用户id',
  })
  userId: number;

  @Column('varchar', {
    name: 'token',
    nullable: false,
    comment: 'token',
  })
  token: string;

  @Column('datetime', {
    name: 'expires',
    nullable: true,
    comment: '过期时间',
  })
  expiresTime: Date | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}