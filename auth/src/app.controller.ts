import { Controller, Get } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_user')
  getUser(@Payload() data: any, @Ctx() context: KafkaContext) {
    console.log(data);
    const message = context.getMessage();
    console.log(message);
    return this.appService.getUser(data.value);
  }
}
