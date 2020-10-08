import { readFile, createFile, writeFile } from '../../modules/file-system';
import { validateFile } from '../../modules/file-system/validate-file';
export const createOneJsonForEachState = async (filename:string): Promise<void> => {
  const fileExist = await validateFile(filename);
  if (!fileExist) {
    return;
  }
  const states = await readFile(filename);
  for (const state of states) {
    if (state?.Sigla) {
      await createFile(`${state.Sigla}.json`);
      await writeFile(`${state.Sigla}.json`, state);
    }
  }
};
