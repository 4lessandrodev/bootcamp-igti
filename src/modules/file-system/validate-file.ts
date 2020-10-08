import fs from 'fs';
import path from 'path';
import env from '../../infra/config/env';

export const validateFile = async (filename: string) => {
  if (filename !== undefined && filename.trim() !== '') {
    return fs.existsSync(path.join(env.DATA_DIRECTORY, filename));
  }
  return false;
};
