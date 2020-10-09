import { findFiveStateHasManyCitiesOrderDesc } from '../printFiveStatesManyCitiesSortDsc';

describe('Estados com mais cidades ', () => {
  test('Se for informado um estadoId maio que 27 deve retornar um array vazio', async () => {
    const arrayVazio = await findFiveStateHasManyCitiesOrderDesc();
    expect(arrayVazio).toEqual(
      [
        {
          Sigla: 'MG',
          quantidadeCidade: 853
        },
        {
          Sigla: 'SP',
          quantidadeCidade: 645
        },
        {
          Sigla: 'RS',
          quantidadeCidade: 496
        },
        {
          Sigla: 'BA',
          quantidadeCidade: 417
        }
      ]
    );
  });
});
