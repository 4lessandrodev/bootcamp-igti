import fs from 'fs';
import path from 'path';
import env from '../../infra/config/env';
import { validateFile } from './validate-file';

export const readFile = async (filename: string):Promise<Array<any>> => {
  if ((await validateFile(filename))) {
    const file = fs.readFileSync(path.join(env.DATA_DIRECTORY, filename), 'utf-8');
    const args = JSON.parse(file);
    return args;
  }
  return [];
};
