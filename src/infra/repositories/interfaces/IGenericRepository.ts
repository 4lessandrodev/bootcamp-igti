
export interface IGenericRepository {
 create(filename:string): Promise<void>;
 delete(filename:string): Promise<void>;
 validate(filename: string): Promise<void>;
 write(filename:string, data:any): Promise<void>
}
