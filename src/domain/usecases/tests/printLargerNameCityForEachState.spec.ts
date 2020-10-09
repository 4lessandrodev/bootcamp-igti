import { printLargerNameCityForEachState } from '../printLargerNameCityForEachState';

describe('Cidades com maior nome por estado', () => {
  test('Deve buscar a cidade que possui o maior nome em cada estado', async () => {
    const result = await printLargerNameCityForEachState();
    expect(result.length).toBe(27);
    expect(result[0].nameSize).toBe(37);
  });
});
