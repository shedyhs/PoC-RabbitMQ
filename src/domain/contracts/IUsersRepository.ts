import { User } from '../entities/user/User';

export interface IUsersRepository {
  getAll(): Promise<User[]>;
  getById(id: string): Promise<User>;
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(id: string): Promise<void>;
}
