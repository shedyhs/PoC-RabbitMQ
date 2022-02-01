import 'dotenv/config';
import { ConsumerHandler } from './infra/ConsumerHandler';

const userHandler = new ConsumerHandler();
userHandler.subscribeAndSendEmail({
  exchangeName: 'user-exchange',
  routingKey: 'user.created',
});
