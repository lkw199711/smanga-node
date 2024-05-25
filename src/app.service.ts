import { Injectable } from '@nestjs/common';
const packageJson = require('../package.json');
import * as os from 'os';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  get_version(): string {
    return packageJson.version;
  }
  get_system(): string {
    const platform = os.platform();
    if (platform === 'win32') {
      return 'Windows';
    } else if (platform === 'linux') {
      return 'Linux';
    } else {
      return 'Other';
    }
  }
}
