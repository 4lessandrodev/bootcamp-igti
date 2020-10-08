import { Estado } from '../model/Estado';
import { IEstado } from '../model/interfaces/IEstado';
import { IEstadoController } from './interfaces/IEstadoController';
import { countCitiesBelongsToStateFromOneFile } from '../domain/usecases/countCitiesBelongsToStateFromOneFile';

export const EstadoController:IEstadoController = {
  async countCitiesFromState (estadoId:string, filename:string):Promise<number> {
    return await countCitiesBelongsToStateFromOneFile(filename, estadoId);
  },

  async createJsonFileForEachState (filename:string):Promise<void> {

  },

  async read (estado:Estado, filename:string):Promise<Array<IEstado>> {
    return await estado.read(filename);
  },

  async validate (estado:Estado, filename:string):Promise<void> {

  },

  async write (estado: Estado, filename:string, data:IEstado): Promise<void> {

  }
};
