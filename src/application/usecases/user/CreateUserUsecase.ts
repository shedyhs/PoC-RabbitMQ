import { ICreateUser } from './interfaces/ICreateUser';
import { ICreateUserDTO } from './dtos/ICreateUserDTO';
import { User } from '@/domain/entities/user/User';
import { IOutputUserDTO } from './dtos/IOutputUserDTO';
import { UserMapper } from '@/mappers/UserMapper';
import { IPublisherHandler } from '@/domain/contracts/IPublisherHandler';

export class CreateUserUseCase implements ICreateUser {
  constructor(private readonly publisherHandler: IPublisherHandler) {}

  async execute(input: ICreateUserDTO): Promise<IOutputUserDTO> {
    const userEntity = new User(input);
    this.publisherHandler.publish({
      exchange: { name: 'user-exchange', type: 'topic' },
      routingKey: 'user.created',
      message: JSON.stringify(UserMapper.toOutputDTO(userEntity)),
    });
    return UserMapper.toOutputDTO(userEntity);
  }
}
