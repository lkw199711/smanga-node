// utils/load-files.ts
import { readdirSync } from 'fs';
import { join } from 'path';

export function loadFiles(entitiesDir: string, extension:string): any[] {
  const entities = [];
  const files = readdirSync(entitiesDir);

  for (const file of files) {
    if (file.endsWith(extension)) {
      const entity = require(join(entitiesDir, file));
      const entityName = Object.keys(entity)[0];
      entities.push(entity[entityName]);
    }
  }

  return entities;
}
