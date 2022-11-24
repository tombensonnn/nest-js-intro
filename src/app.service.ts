import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): string {
    return 'Users';
  }
}

@Injectable()
export class ApiService {
  getProducts(): string {
    return 'products';
  }
}
