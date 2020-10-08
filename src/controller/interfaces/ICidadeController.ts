import { Cidade } from '../../model/Cidade';
import { ICidade } from '../../model/interfaces/ICidade';

export interface ICidadeController {
 create(cidade: Cidade, filename:string): Promise<void>;
 delete(cidade: Cidade, filename:string): Promise<void>;
 read(cidade: Cidade, filename:string): Promise<Array<ICidade>>;
 validate(cidade: Cidade, filename: string): Promise<void>;
 write(cidade: Cidade, filename: string, data:any):Promise<void>
}
