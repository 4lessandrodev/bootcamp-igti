
import { StateRepository } from '../infra/repositories/StateRepository';
import { IEstado, IEstadoMethods } from './interfaces/IEstado';

export class Estado extends StateRepository implements IEstadoMethods {
  private readonly ID:string|undefined;
  private readonly Nome:string|undefined;
  private readonly Sigla: string|undefined;
  constructor (id?: string, nome?: string, sigla?: string, filename?:string) {
    super();
    this.ID = id;
    this.Nome = nome;
    this.Sigla = sigla;
  }

  getJsonElement (estados:Array<string>):Array<IEstado> {
    return estados.map((estado) => JSON.parse(estado));
  }

  getStringElement (estados:Array<IEstado>):Array<string> {
    return estados.map((estado) => JSON.stringify(estado));
  }
}
