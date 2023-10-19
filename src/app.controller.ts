import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async seeding(): Promise<any> {
    // return this.appService.getHello();
    // await this.appService.seed();
    return this.appService.getEmployeeById(1);
    // return 'seed complete';
  }
}
