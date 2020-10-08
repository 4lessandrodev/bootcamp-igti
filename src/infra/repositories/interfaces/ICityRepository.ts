import { ICidade } from '../../../model/interfaces/ICidade';

export interface ICityRepository {
 read(filename:string): Promise<Array<ICidade>>;
}
