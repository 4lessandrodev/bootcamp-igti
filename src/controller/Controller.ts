import { IController } from './IController';
import {
  countCitiesBelongsToStateFromOneFile, createOneJsonForEachState,
  findFiveStateHasLessCitiesOrderDesc, findFiveStateHasManyCitiesOrderDesc,
  printLargerNameCityForAlltate, printLargerNameCityForEachState,
  printSmallerNameCityForAllState, printSmallerNameCityForEachState
} from '../domain/usecases';
import { IFiveResults } from '../domain/usecases/interfaces/IFiveResults';
import { ICitiesResult } from '../domain/usecases/interfaces/ICitiesResult';

export const Controller:IController = {
  findFiveStatesLessCitiesSortDsc: async (): Promise<Array<IFiveResults>> => {
    const result = await findFiveStateHasLessCitiesOrderDesc();
    return result;
  },
  findFiveStatesManyCitiesSortDsc: async (): Promise<Array<IFiveResults>> => {
    const result = await findFiveStateHasManyCitiesOrderDesc();
    return result;
  },
  findLargerNameCityForEachState: async ():Promise<Array<ICitiesResult>> => {
    const result = await printLargerNameCityForEachState();
    return result;
  },
  findLargerNameCityFromAllStates: async (): Promise<Array<ICitiesResult>> => {
    const result = await printLargerNameCityForAlltate();
    return result;
  },
  findSmallerNameCityForEachState: async ():Promise<Array<ICitiesResult>> => {
    const result = await printSmallerNameCityForEachState();
    return result;
  },
  findSmallerNameCityFromAllStates: async ():Promise<Array<ICitiesResult>> => {
    const result = await printSmallerNameCityForAllState();
    return result;
  },

  findCitiesBelongsToStateFromOneFile: async (filename:string, stateId:string):Promise<number> => {
    const result = await countCitiesBelongsToStateFromOneFile(filename, stateId);
    return result;
  },

  createOneJsonForEachState: async (filename:string): Promise<void> => {
    await createOneJsonForEachState(filename);
  }
};
