import { createFile, writeFile, readFile, validateFile, deleteFile } from '../index';

describe('Write file', () => {
  test('Deve escrever em um arquivo', async () => {
    const filename = 'Escrevendo.json';
    await createFile(filename);
    await writeFile(filename, 'Hello World');
    const fraseNoArquivo = await readFile(filename);
    await deleteFile(filename);
    expect(fraseNoArquivo).toBe('Hello World');
  });

  test('Não pode criar um novo arquivo se eu informar um nome de arquivo que não existe', async () => {
    const filename = 'Escrevendo.json';
    await writeFile(filename, 'Hello World');
    const exist = await validateFile(filename);
    expect(exist).toBe(false);
  });
});
