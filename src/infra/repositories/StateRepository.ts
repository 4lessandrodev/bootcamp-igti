
import { IEstado } from '../../model/interfaces/IEstado';
import { GenericRepository } from './GenericRepository';
import { IStateRepository } from './interfaces/IStateRepository';

export class StateRepository extends GenericRepository implements IStateRepository {
  async read (filename: string): Promise<Array<IEstado>> {
    throw new Error('Method not implemented.');
  }
}
