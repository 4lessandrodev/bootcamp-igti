import { printSmallerNameCityForAllState } from '../printSmallerNameCityFromAllStates';

describe('Cidades com menor nome por estado', () => {
  test('Deve buscar a cidade que possui o menor nome em cada estado', async () => {
    const result = await printSmallerNameCityForAllState();
    expect(result.length).toBe(1);
    expect(result[0].nameSize).toBe(3);
  });
});
