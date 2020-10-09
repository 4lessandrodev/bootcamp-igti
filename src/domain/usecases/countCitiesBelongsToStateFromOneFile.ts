import { readFile } from '../../modules/file-system';

export const countCitiesBelongsToStateFromOneFile = async (filename:string, stateId:string):Promise<number> => {
  const citiesJson = await readFile(filename);
  const citiesFromState = citiesJson.filter((city) => city.Estado === stateId);
  return citiesFromState.length;
};
