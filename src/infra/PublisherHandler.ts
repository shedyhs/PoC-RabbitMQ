import amqp from 'amqplib';

import {
  IPublisherHandler,
  IPublishMessage,
} from '@/domain/contracts/IPublisherHandler';

export class PublisherHandler implements IPublisherHandler {
  async publish(input: IPublishMessage): Promise<void> {
    const connection = await amqp.connect(String(process.env.RABBITMQ_URL));
    const channel = await connection.createChannel();
    await channel.assertExchange(input.exchange.name, input.exchange.type, {
      durable: true,
    });
    channel.publish(
      input.exchange.name,
      input.routingKey,
      Buffer.from(input.message),
    );
    console.log('✉️  Message sent:', input.message);
  }
}
