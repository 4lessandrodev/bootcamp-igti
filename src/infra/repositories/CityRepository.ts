import { ICidade } from '../../model/interfaces/ICidade';
import { GenericRepository } from './GenericRepository';
import { ICityRepository } from './interfaces/ICityRepository';

export class CityRepository extends GenericRepository implements ICityRepository {
  async read (filename: string): Promise<Array<ICidade>> {
    throw new Error('Method not implemented.');
  }
}
