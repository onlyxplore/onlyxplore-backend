import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return {
      status: 'ok',
      message: '🚀 OnlyXplore Backend is running!',
      version: '1.0.0',
    };
  }
}
