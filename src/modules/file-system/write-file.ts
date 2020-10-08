import fs from 'fs';
import path from 'path';
import env from '../../infra/config/env';
import { validateFile } from './validate-file';

export const writeFile = async (filename: string, data: any) => {
  if ((await validateFile(filename))) {
    return fs.writeFileSync(path.join(env.DATA_DIRECTORY, filename), JSON.stringify(data), 'utf-8');
  }
};
