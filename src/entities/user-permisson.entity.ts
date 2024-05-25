import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('user-module-operation', ['userId', 'module', 'operation'], {
  unique: true,
})
@Entity('user-permisson', { schema: 'smanga' })
export class UserPermisson {
  @PrimaryGeneratedColumn({
    comment: '权限id',
    unsigned: true,
  })
  userPermissonId: number;

  @Column('int', {
    unsigned: true,
    comment: '用户id',
  })
  userId: number;

  @Column('varchar', {
    comment: '模块',
  })
  module: string;

  @Column('varchar', {
    comment: '操作',
    default: 'default',
  })
  operation: 'add' | 'delete' | 'select' | 'update' | 'all' | 'default';

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
