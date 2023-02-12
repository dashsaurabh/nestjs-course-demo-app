import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [ProductsModule, 
    ConfigurationModule.register({db_url: 'http://localhost:27017'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}