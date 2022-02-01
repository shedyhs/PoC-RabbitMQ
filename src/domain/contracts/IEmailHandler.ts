export interface IEmailHandler {
  sendWelcomeEmail(to: string): Promise<void>;
}
