import { IOutputUserDTO } from '@/application/usecases/user/dtos/IOutputUserDTO';
import { User } from '@/domain/entities/user/User';

export class UserMapper {
  public static toOutputDTO(user: User): IOutputUserDTO {
    return {
      id: user.id,
      email: user.email,
    };
  }
}
