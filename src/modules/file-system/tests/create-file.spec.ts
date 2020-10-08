import { createFile, validateFile, deleteFile } from '../index';

describe.only('Create file', () => {
  test('Deve criar um arquivo json', async () => {
    const filename = 'new_file.json';
    const fileExist = await validateFile(filename);
    await createFile(filename);
    const fileCreated = await validateFile(filename);
    await deleteFile(filename);
    expect(fileCreated).toBe(true);
    expect(fileExist).toBe(false);
  });
});
