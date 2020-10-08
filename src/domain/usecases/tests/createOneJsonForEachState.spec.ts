import { deleteFile, readFile, validateFile } from '../../../modules/file-system';
import { createOneJsonForEachState } from '../createOneJsonForEachState';
describe('Create Json ForEach State', () => {
  test('Create one file for each state on file Estado.json', async () => {
    await createOneJsonForEachState('Estados.json');
    const estados = await readFile('Estados.json');
    const Mg = await readFile('MG.json');
    expect(Mg).toEqual({ ID: '11', Sigla: 'MG', Nome: 'Minas Gerais' });

    for (const estado of estados) {
      expect(await validateFile(`${estado.Sigla}.json`)).toBe(true);
      await deleteFile(`${estado.Sigla}.json`);
    }
  });
});
