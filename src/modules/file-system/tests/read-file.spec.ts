import { readFile } from '../read-file';

describe('Ler arquivo', () => {
  test('Deve ler um arquivo se ele existir', async () => {
    const cidades = await readFile('Estados.json');
    expect(cidades[0]).toEqual({
      ID: '1',
      Sigla: 'AC',
      Nome: 'Acre'
    });
  });

  test('Deve retornar um array vazio se tentar ler um arquivo que não existir', async () => {
    const cidades = await readFile('not_exist.json');
    expect(cidades).toEqual([]);
  });
});
