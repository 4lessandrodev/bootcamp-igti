import { Cidade } from '../model/Cidade';
import { ICidade } from '../model/interfaces/ICidade';
import { ICidadeController } from './interfaces/ICidadeController';

export const CidadeController:ICidadeController = {
  async create (cidade:Cidade, filename:string):Promise<void> {
    await cidade.create(filename);
  },

  async delete (cidade:Cidade, filename:string):Promise<void> {
    await cidade.delete(filename);
  },

  async read (cidade:Cidade, filename:string):Promise<Array<ICidade>> {
    return await cidade.read(filename);
  },

  async validate (cidade:Cidade, filename:string):Promise<void> {
    await cidade.validate(filename);
  },

  async write (cidade: Cidade, filename:string, data: ICidade): Promise<void> {

  }
};
