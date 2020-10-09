import { findFiveStateHasLessCitiesOrderDesc } from '../printFiveStatesLessCitiesSortDsc';

describe('Estados com mais cidades ', () => {
  test('Se for informado um estadoId maio que 27 deve retornar um array vazio', async () => {
    const arrayVazio = await findFiveStateHasLessCitiesOrderDesc();
    expect(arrayVazio).toEqual(
      [
        {
          Sigla: 'DF',
          quantidadeCidade: 1
        },
        {
          Sigla: 'RR',
          quantidadeCidade: 15
        },
        {
          Sigla: 'AP',
          quantidadeCidade: 16
        },
        {
          Sigla: 'AC',
          quantidadeCidade: 22
        }
      ]
    );
  });
});
