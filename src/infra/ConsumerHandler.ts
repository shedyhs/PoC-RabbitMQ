import rabbitMq from 'amqplib';
import {
  IConsumeMessage,
  IConsumerHandler,
} from '@/domain/contracts/IConsumerHandler';
import { SendinblueEmailHandler } from './SendinblueEmailHandler';

export class ConsumerHandler implements IConsumerHandler {
  async subscribeAndSendEmail(input: IConsumeMessage): Promise<void> {
    const client = await rabbitMq.connect(String(process.env.RABBITMQ_URL));
    const channel = await client.createChannel();
    const { queue } = await channel.assertQueue('queue', {
      durable: true,
    });
    await channel.bindQueue(queue, input.exchangeName, input.routingKey);
    channel.consume(
      queue,
      async (message) => {
        if (message) {
          console.log('✉️  Message received:', message?.content.toString());
          const { email } = JSON.parse(message.content.toString());
          const emailHandler = new SendinblueEmailHandler();
          await emailHandler.sendWelcomeEmail(email);
          channel.ack(message);
        }
      },
      { noAck: false },
    );
    console.log('📬  Waiting for messages in queue:', queue);
  }
}
