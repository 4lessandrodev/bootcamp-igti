export interface ICidade{
 ID: string;
 Nome: string;
 Estado: string;
}

export interface ICidadeMethods{
 getJsonElement (cidades:Array<string>):Array<ICidade>
 getStringElement (cidades:Array<ICidade>):Array<string>
}
