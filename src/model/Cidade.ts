import { CityRepository } from '../infra/repositories/CityRepository';
import { ICidade, ICidadeMethods } from './interfaces/ICidade';

export class Cidade extends CityRepository implements ICidadeMethods {
 private readonly ID: string|undefined;
 private readonly Nome: string|undefined;
 private readonly Estado: string|undefined;
 constructor (id?: string, nome?: string, estado?: string, filename?:string) {
   super();
   this.Estado = estado;
   this.ID = id;
   this.Nome = nome;
 }

 getJsonElement (cidades:Array<string>):Array<ICidade> {
   return cidades.map((cidade) => JSON.parse(cidade));
 }

 getStringElement (cidades:Array<ICidade>):Array<string> {
   return cidades.map((cidade) => JSON.stringify(cidade));
 }
}
