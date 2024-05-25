/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-15 16:25:36
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-15 16:25:49
 * @FilePath: \smanga-node\test.js
 */
import * as fs from 'fs';
import * as path from 'path';

const dirEntries = fs.readdirSync('C:program-user\\10temp\\01chapter', {
  withFileTypes: true,
});

console.log(dirEntries);