import {Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello world'
  }
}
