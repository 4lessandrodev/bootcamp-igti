import { printSmallerNameCityForEachState } from '../printSmallerNameCityForEachState';

describe('Cidades com menor nome por estado', () => {
  test('Deve buscar a cidade que possui o maior nome em cada estado', async () => {
    const result = await printSmallerNameCityForEachState();
    expect(result.length).toBe(27);
    expect(result[0].nameSize).toBe(3);
  });
});
