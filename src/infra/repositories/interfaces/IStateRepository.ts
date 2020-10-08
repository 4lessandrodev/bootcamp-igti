import { IEstado } from '../../../model/interfaces/IEstado';

export interface IStateRepository {
 read(filename:string): Promise<Array<IEstado>>;
}
