/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-10 11:38:56
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-23 17:50:57
 * @FilePath: \smanga-node\src\tag\entities\tag.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tag', { schema: 'smanga' })
export class Tag {
  @PrimaryGeneratedColumn({ unsigned: true, comment: '标签主键' })
  tagId: number;

  @Column('varchar', {
    comment: '标签名称',
  })
  tagName: string;

  @Column('varchar', {
    comment: '标签颜色',
    default: '#a0d911',
  })
  tagColor: string;

  @Column('int', {
    nullable: true,
    unsigned: true,
    comment: '用户id',
  })
  userId: number | null;

  @Column('varchar', {
    nullable: true,
    comment: '标签说明',
  })
  description: string | null;

  @CreateDateColumn({ type: 'datetime', comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ type: 'datetime', comment: '更新时间' })
  updateTime: Date;
}
