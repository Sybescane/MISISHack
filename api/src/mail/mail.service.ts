import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {

  constructor(private readonly mailerService: MailerService) {}

  async sendCodeMail(email: string, code: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Код подтверждения',
      template: './code',
      context: {
        code
      }
    });
  }
}