import nodemailer from 'nodemailer';
import { IEmailHandler } from '@/domain/contracts/IEmailHandler';

export class EmailHandler implements IEmailHandler {
  private client;

  constructor() {
    this.client = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  async sendWelcomeEmail(to: string): Promise<void> {
    console.log(`📬  Sending email to ${to}`);
  }
}
