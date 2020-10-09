import { printLargerNameCityForAlltate } from '../printLargerNameCityFromAllStates';

describe('Cidades com maior nome', () => {
  test('Deve buscar a cidade que possui o maior nome', async () => {
    const result = await printLargerNameCityForAlltate();
    expect(result.length).toBe(1);
    expect(result[0].nameSize).toBe(37);
  });
});
