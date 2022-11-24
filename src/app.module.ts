import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiService, AppService } from './app.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, ApiService],
})
export class AppModule {}
