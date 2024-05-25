import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import * as path from 'path';
config({ path: path.join(__dirname, '../../.env') });

@Injectable()
class Utils {
  constructor(private readonly configService: ConfigService) {}

  get isDevelopment(): boolean {
    return this.configService.get<string>('NODE_ENV') === 'development';
  }

  get databaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }

  dev_log(message) {
    if (process.env.NODE_ENV === 'development') console.log(message);
  }
}

/**
 * @description: 开发环境日志
 * @param {*} message
 * @return {*}
 */
function dev_log(message) {
  if (process.env.NODE_ENV === 'development') console.log(message);
}

export { Utils, dev_log };
/*
development
production
test
*/
