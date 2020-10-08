import { IGenericRepository } from './interfaces/IGenericRepository';

export class GenericRepository implements IGenericRepository {
  async create (filename:string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async delete (filename:string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async validate (filename:string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async write (filename:string, data:any): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
