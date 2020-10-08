import { Estado } from '../../model/Estado';
import { IEstado } from '../../model/interfaces/IEstado';

export interface IEstadoController {
 countCitiesFromState(estadoId: string, filename:string): Promise<number>;
 createJsonFileForEachState(filename:string): Promise<void>;
 read(estado: Estado, filename:string): Promise<Array<IEstado>>;
 validate(estado: Estado, filename:string): Promise<void>;
 write(estado: Estado, filename: string, data:IEstado):Promise<void>
}
