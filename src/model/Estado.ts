
export class Estado {
  private readonly ID:string;
  private readonly Nome:string;
  private readonly Sigla: string;
  constructor (id: string, nome: string, sigla: string) {
    this.ID = id;
    this.Nome = nome;
    this.Sigla = sigla;
  }
}
