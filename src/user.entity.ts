/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-03 17:48:43
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-03 17:48:46
 * @FilePath: \smanga-node\src\user.entity.ts
 * @Description: 用户模组
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
