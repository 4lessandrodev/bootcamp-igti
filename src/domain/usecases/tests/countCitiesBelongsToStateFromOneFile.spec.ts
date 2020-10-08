import { countCitiesBelongsToStateFromOneFile } from '../countCitiesBelongsToStateFromOneFile';

describe('Count Cities Belongs To State From One File', () => {
  test('Deve retornar a quantidade de cidades de um estado', async () => {
    const estadoId = '25';
    const quantidadeDeCidades = await countCitiesBelongsToStateFromOneFile('Cidades.json', estadoId);
    expect(quantidadeDeCidades).toBe(75);
  });

  test('Deve retornar 0 se um arquivo não existir', async () => {
    const estadoId = '25';
    const quantidadeDeCidades = await countCitiesBelongsToStateFromOneFile('not_exist.json', estadoId);
    expect(quantidadeDeCidades).toBe(0);
  });
});
