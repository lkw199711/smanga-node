/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-03 17:48:43
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-03 17:48:46
 * @FilePath: \smanga-node\src\user.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
