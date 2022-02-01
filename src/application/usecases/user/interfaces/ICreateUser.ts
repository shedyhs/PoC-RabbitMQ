import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IOutputUserDTO } from '../dtos/IOutputUserDTO';

export interface ICreateUser {
  execute(user: ICreateUserDTO): Promise<IOutputUserDTO>;
}
