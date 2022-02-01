import * as awilix from 'awilix';
import { CreateUserController } from '@/application/controllers/users/CreateUserController';
import { CreateUserUseCase } from '@/application/usecases/user/CreateUserUsecase';

import { SendinblueEmailHandler } from '@/infra/SendinblueEmailHandler';
import { IPublisherHandler } from '@/domain/contracts/IPublisherHandler';
import { IConsumerHandler } from '@/domain/contracts/IConsumerHandler';
import { IEmailHandler } from '@/domain/contracts/IEmailHandler';
import { PublisherHandler } from '@/infra/PublisherHandler';
import { ConsumerHandler } from '@/infra/ConsumerHandler';

type Cradle = {
  createUserUseCase: CreateUserUseCase;
  createUserController: CreateUserController;

  publisherHandler: IPublisherHandler;
  consumerHandler: IConsumerHandler;
  emailHandler: IEmailHandler;
};

const container = awilix.createContainer<Cradle>({
  injectionMode: awilix.InjectionMode.CLASSIC,
});

container.register({
  createUserUseCase: awilix.asClass(CreateUserUseCase).singleton(),
  createUserController: awilix.asClass(CreateUserController).singleton(),
  publisherHandler: awilix.asClass(PublisherHandler).singleton(),
  consumerHandler: awilix.asClass(ConsumerHandler).singleton(),
  emailHandler: awilix.asClass(SendinblueEmailHandler).singleton(),
});

export { container };
