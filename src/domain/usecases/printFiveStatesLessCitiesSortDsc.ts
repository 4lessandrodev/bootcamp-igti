import { readFile } from '../../modules/file-system';
import { countCitiesBelongsToStateFromOneFile } from './countCitiesBelongsToStateFromOneFile';

interface IFiveResults{
 Sigla: string
 quantidadeCidade:number
}

export const findFiveStateHasLessCitiesOrderDesc = async (): Promise<Array<IFiveResults>> => {
  const states = await readFile('Estados.json');
  const result = [];
  for (const { ID, Sigla } of states) {
    const quantidadeCidade = await countCitiesBelongsToStateFromOneFile('Cidades.json', ID);
    result.push({ Sigla, quantidadeCidade });
  }
  const orderedList = result.sort((b, a) => b.quantidadeCidade - a.quantidadeCidade);
  return orderedList.slice(0, 4);
};
