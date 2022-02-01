import nodemailer from 'nodemailer';
import { IEmailHandler } from '@/domain/contracts/IEmailHandler';

export class SendinblueEmailHandler implements IEmailHandler {
  private client;

  constructor() {
    this.client = nodemailer.createTransport({
      service: 'SendinBlue',
      auth: {
        user: process.env.SENDINBLUE_EMAIL,
        pass: process.env.SENDINBLUE_PASSWORD,
      },
    });
  }
  async sendWelcomeEmail(to: string): Promise<void> {
    this.client.sendMail({
      to: {
        name: to,
        address: to,
      },
      from: {
        name: 'Seja bem vindo a PoC-RabbitMQ',
        address: process.env.SMTP_USER ?? `shedyhs@gmail.com`,
      },
      subject: 'Seja bem vindo a PoC-RabbitMQ',
      html: `<p>Olá, ${to}</p>
      <p>Você se cadastrou na PoC-RabbitMQ.</p>`,
    });
    console.log(`📬  Sending email via sendinblue to ${to}`);
  }
}
