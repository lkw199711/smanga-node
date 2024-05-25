/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-09 19:25:18
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-24 11:30:44
 * @FilePath: \smanga-node\src\controllers\log\dto\create-log.dto.ts
 */
export class CreateLogDto {
  userId?: number;
  logType?: 'error' | 'process' | 'operate';
  logLevel?: number;
  module?: string;
  queue: string;
  message: string;
  exception?: string;
  version?: string;
  environment?: string;
}
