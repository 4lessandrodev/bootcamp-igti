import { deleteFile, validateFile, createFile } from '../index';

describe('Delete file', () => {
  test('Deve excluir um arquivo existente', async () => {
    const filename = 'new_file.json';
    await createFile(filename);
    await deleteFile(filename);
    const fileExist = await validateFile(filename);
    expect(fileExist).toBe(false);
  });

  test('Não pode dar erro ao tentar excluir um arquivo inexistente', async () => {
    const filename = 'file_not_exist.json';
    const fileExist = await validateFile(filename);
    expect(fileExist).toBe(false);
  });
});
