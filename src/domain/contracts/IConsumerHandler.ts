export type IConsumeMessage = {
  exchangeName: string;
  routingKey: string;
};

export interface IConsumerHandler {
  subscribeAndSendEmail(input: IConsumeMessage): Promise<void>;
}
