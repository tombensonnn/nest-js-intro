import { Controller, Get } from '@nestjs/common';
import { AppService, ApiService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  users(): string {
    return this.appService.getUsers();
  }
}
