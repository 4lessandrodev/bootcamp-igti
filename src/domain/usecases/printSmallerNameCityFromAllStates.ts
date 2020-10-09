import { readFile } from '../../modules/file-system';
import { ICitiesResult } from './interfaces/ICitiesResult';

export const printSmallerNameCityForAllState = async (): Promise<Array<ICitiesResult>> => {
  const states = await readFile('Estados.json');
  const cidades = await readFile('Cidades.json');
  const tamanhoDeNomesDasCidades = [];
  const cidadesComMaiorNomePorEstado = [];
  for (const cidade of cidades) {
    tamanhoDeNomesDasCidades.push({ ...cidade, nameSize: cidade.Nome.length });
  }
  for (const state of states) {
    const maioresPorEstado = tamanhoDeNomesDasCidades
      .sort((a, b) => a.nameSize - b.nameSize)
      .filter((cidade) => cidade.Estado === state.ID);
    const maiorCidade = { ...maioresPorEstado[0], Sigla: state.Sigla };
    cidadesComMaiorNomePorEstado.push(maiorCidade);
  }
  const cidadesOrdenadas = cidadesComMaiorNomePorEstado.sort((a, b) => a.nameSize - b.nameSize);
  return [cidadesOrdenadas[0]];
};
