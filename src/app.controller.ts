import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigurationService } from './configuration/configuration.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly configService: ConfigurationService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/config")
  getConfiguration(): string {
    return this.configService.getDBUrl();
  }
}
