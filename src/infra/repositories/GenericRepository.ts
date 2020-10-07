import { IGenericRepository } from './IGenericRepository';

export class GenericRepository implements IGenericRepository {
 private readonly filename: string;
 constructor (filename: string) {
   this.filename = filename;
 }

 async create (): Promise<void> {
   throw new Error('Method not implemented.');
 }

 async delete (): Promise<void> {
   throw new Error('Method not implemented.');
 }

 async read (): Promise<void> {
   throw new Error('Method not implemented.');
 }

 async validate (): Promise<void> {
   throw new Error('Method not implemented.');
 }
}
