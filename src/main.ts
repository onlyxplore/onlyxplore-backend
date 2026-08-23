import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, RequestMethod } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    // Enable CORS for frontend
    const configService = app.get(ConfigService);
    const frontendUrl =
      configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';
    const frontendUrls = frontendUrl.split(',');

    app.enableCors({
      origin: frontendUrls,
      credentials: true,
      methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'x-frontend-url'],
    });

    // Global validation pipe
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    // Global prefix
    app.setGlobalPrefix('api', {
      exclude: [{ path: '/', method: RequestMethod.GET }],
    });

    const port = process.env.PORT || 4000;
    await app.listen(port);
    console.log(`🚀 Backend running on http://localhost:${port}`);
  } catch (err: any) {
    console.error('Failed to start NestJS:', err);
    // If it fails to start, start a raw HTTP server to return the error!
    const http = require('http');
    const port = process.env.PORT || 4000;
    const server = http.createServer((req: any, res: any) => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        error: 'NestJS failed to start',
        message: err.message,
        stack: err.stack,
      }));
    });
    server.listen(port);
  }
}
void bootstrap();
