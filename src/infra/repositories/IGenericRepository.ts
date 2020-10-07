export interface IGenericRepository {
 create(): Promise<void>;
 delete(): Promise<void>;
 read(): Promise<void>;
 validate(): Promise<void>;
}
