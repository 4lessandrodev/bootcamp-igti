
export class Cidade {
 private readonly ID: string;
 private readonly Nome: string;
 private readonly Estado: string;
 constructor (id: string, nome: string, estado: string) {
   this.Estado = estado;
   this.ID = id;
   this.Nome = nome;
 }
}
