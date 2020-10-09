import { IFiveResults } from '../domain/usecases/interfaces/IFiveResults';
import { ICitiesResult } from '../domain/usecases/interfaces/ICitiesResult';

export interface IController {
 findFiveStatesLessCitiesSortDsc():Promise<Array<IFiveResults>>;
 findFiveStatesManyCitiesSortDsc(): Promise<Array<IFiveResults>>;
 findLargerNameCityForEachState():Promise<Array<ICitiesResult>>;
 findLargerNameCityFromAllStates():Promise<Array<ICitiesResult>>;
 findSmallerNameCityForEachState():Promise<Array<ICitiesResult>>;
 findSmallerNameCityFromAllStates(): Promise<Array<ICitiesResult>>;
 findCitiesBelongsToStateFromOneFile(filename: string, stateId: string): Promise<number>;
 createOneJsonForEachState(filename:string): Promise<void>
}
