import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { LoggingMiddleware } from './middleware';

import { AuthModule } from './modules/auth';
import { UserModule } from './modules/settings';

@Module({
  imports: [
    AuthModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }

}
