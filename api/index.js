const { NestFactory } = require('@nestjs/core');
const { ValidationPipe, RequestMethod } = require('@nestjs/common');
const { ConfigService } = require('@nestjs/config');

// Require the COMPILED AppModule from dist! This bypasses Vercel's esbuild completely!
const { AppModule } = require('../dist/src/app.module');

let cachedApp;

async function bootstrap() {
  if (!cachedApp) {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);
    const frontendUrl = configService.get('FRONTEND_URL') || 'http://localhost:3000';
    const frontendUrls = frontendUrl.split(',');

    app.enableCors({
      origin: frontendUrls,
      credentials: true,
      methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'x-frontend-url'],
    });

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    app.setGlobalPrefix('api', {
      exclude: [{ path: '/', method: RequestMethod.GET }],
    });

    await app.init();

    cachedApp = app.getHttpAdapter().getInstance();
  }
  return cachedApp;
}

module.exports = async (req, res) => {
  try {
    const expressApp = await bootstrap();
    return expressApp(req, res);
  } catch (err) {
    console.error('NestJS failed to start:', err);
    res.status(500).json({
      error: 'NestJS failed to start',
      message: err.message,
      stack: err.stack,
    });
  }
};
