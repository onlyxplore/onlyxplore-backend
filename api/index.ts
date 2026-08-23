import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe, RequestMethod } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import serverlessExpress from '@vendia/serverless-express';
import { Handler } from 'express';

let cachedServer: Handler;

async function bootstrap() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule, { abortOnError: false });

    // Enable CORS for frontend
    const configService = app.get(ConfigService);
    const frontendUrl = configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';
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

    await app.init();
    
    const expressApp = app.getHttpAdapter().getInstance();
    cachedServer = serverlessExpress({ app: expressApp });
  }
  return cachedServer;
}

export default async function handler(req: any, res: any) {
  try {
    const server = await bootstrap();
    return server(req, res, () => {});
  } catch (error: any) {
    console.error('Serverless initialization failed:', error);
    res.status(500).json({
      status: 'error',
      message: 'Serverless initialization failed',
      details: error.message,
      stack: error.stack,
    });
  }
}
