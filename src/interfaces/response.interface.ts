/*
 * @Author: 梁楷文 lkw199711@163.com
 * @Date: 2024-05-07 20:08:19
 * @LastEditors: 梁楷文 lkw199711@163.com
 * @LastEditTime: 2024-05-07 20:12:05
 * @FilePath: \smanga-node\src\interfaces\response.interface.ts
 * @Description: 公用返回格式
 */

/**
 * @description: 公共返回格式
 * @return {*}
 */
export interface SResponse {
  code: number;
  message: string;
  data?: any;
}

/**
 * @description: 列表返回格式
 * @return {*}
 */
export interface ListResponse extends SResponse {
  list: [];
  count: number;
}
