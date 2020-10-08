import { ICidade } from '../../model/interfaces/ICidade';
import { readFile } from '../../modules/file-system';

export const countCitiesBelongsToStateFromOneFile = async (filename:string, stateId:string) => {
  const citiesJson = await readFile(filename);
  const citiesFromState = citiesJson.filter((city:ICidade) => city?.Estado === stateId);
  return citiesFromState.length;
};
