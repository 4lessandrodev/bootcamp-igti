import { readFile } from '../../modules/file-system';
import { countCitiesBelongsToStateFromOneFile } from './countCitiesBelongsToStateFromOneFile';
import { IFiveResults } from './interfaces/IFiveResults';

export const findFiveStateHasManyCitiesOrderDesc = async (): Promise<Array<IFiveResults>> => {
  const states = await readFile('Estados.json');
  const result = [];
  for (const { ID, Sigla } of states) {
    const quantidadeCidade = await countCitiesBelongsToStateFromOneFile('Cidades.json', ID);
    result.push({ Sigla, quantidadeCidade });
  }
  const orderedList = result.sort((a, b) => b.quantidadeCidade - a.quantidadeCidade);
  return orderedList.slice(0, 4);
};
