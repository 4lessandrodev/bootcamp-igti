import fs from 'fs';
import path from 'path';
import env from '../../infra/config/env';
import { validateFile } from './validate-file';

export const createFile = async (filename: string) => {
  if (!(await validateFile(filename))) {
    return fs.writeFileSync(path.join(env.DATA_DIRECTORY, filename), '');
  }
};
