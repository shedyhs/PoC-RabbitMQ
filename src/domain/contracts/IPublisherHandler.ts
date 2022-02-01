export type IPublishMessage = {
  exchange: { name: string; type: 'topic' | 'direct' | 'fanout' };
  routingKey: string;
  message: string;
};

export interface IPublisherHandler {
  publish(input: IPublishMessage): Promise<void>;
}
