import { GenericRepository } from '../infra/repositories/GenericRepository';

export class Cidade extends GenericRepository {
 private readonly ID: string;
 private readonly Nome: string;
 private readonly Estado: string;
 constructor (id: string, nome: string, estado: string, filename:string) {
   super(filename);
   this.Estado = estado;
   this.ID = id;
   this.Nome = nome;
 }
}
