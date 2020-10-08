
export interface IEstado {
 ID:string;
 Nome:string;
 Sigla: string;
}

export interface IEstadoMethods{
 getJsonElement (estados:Array<string>):Array<IEstado>
 getStringElement (estados:Array<IEstado>):Array<string>
}
