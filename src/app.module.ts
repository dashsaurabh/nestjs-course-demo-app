import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { LoggingMiddleware } from './middlewares/logging.middleware';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [ProductsModule, 
    ConfigurationModule.register({db_url: 'http://localhost:27017'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes(ProductsController)
  }
}