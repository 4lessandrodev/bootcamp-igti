import { GenericRepository } from '../infra/repositories/GenericRepository';

export class Estado extends GenericRepository {
  private readonly ID:string;
  private readonly Nome:string;
  private readonly Sigla: string;
  constructor (id: string, nome: string, sigla: string, filename:string) {
    super(filename);
    this.ID = id;
    this.Nome = nome;
    this.Sigla = sigla;
  }
}
