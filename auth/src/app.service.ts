import { getUserRequestDto, users } from './get-user-request.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: getUserRequestDto) {
    return users.find((user) => user.userId === getUserRequest.userId);
  }
}
