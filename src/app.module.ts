import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersMiddleware } from "./users/users.middleware";
import { UsersService } from './users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsersMiddleware).forRoutes('users');
  }
}
