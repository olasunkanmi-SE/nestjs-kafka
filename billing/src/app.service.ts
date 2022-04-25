import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserCreatedEvent } from './events/get-user.event';
import { OrderCreatedEvent } from './events/order-create.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    this.authClient
      .send('get_user', new GetUserCreatedEvent(orderCreatedEvent.userId))
      .subscribe((user) => {
        console.log(user);
      });
  }
}
