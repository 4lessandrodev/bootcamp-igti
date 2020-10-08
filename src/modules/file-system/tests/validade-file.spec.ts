import { validateFile } from '../validate-file';

describe('Validate file', () => {
  test('Deve retornar falso se não informar um nome para o arquivo', async () => {
    const vazio = await validateFile('');
    expect(vazio).toBe(false);
  });

  test('Deve retornar falso se o arquivo não existir', async () => {
    const vazio = await validateFile('invalid_name');
    expect(vazio).toBe(false);
  });

  test('Deve retornar true se um arquivo existir', async () => {
    const exist = await validateFile('Estados.json');
    expect(exist).toBe(true);
  });
});
