"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const app_module_1 = require("../src/app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
let cachedServer;
async function bootstrap() {
    if (!cachedServer) {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, { abortOnError: false });
        const configService = app.get(config_1.ConfigService);
        const frontendUrl = configService.get('FRONTEND_URL') || 'http://localhost:3000';
        const frontendUrls = frontendUrl.split(',');
        app.enableCors({
            origin: frontendUrls,
            credentials: true,
            methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization', 'x-frontend-url'],
        });
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }));
        app.setGlobalPrefix('api', {
            exclude: [{ path: '/', method: common_1.RequestMethod.GET }],
        });
        await app.init();
        const expressApp = app.getHttpAdapter().getInstance();
        cachedServer = (0, serverless_express_1.default)({ app: expressApp });
    }
    return cachedServer;
}
async function handler(req, res) {
    try {
        const server = await bootstrap();
        return server(req, res, () => { });
    }
    catch (error) {
        console.error('Serverless initialization failed:', error);
        res.status(500).json({
            status: 'error',
            message: 'Serverless initialization failed',
            details: error.message,
            stack: error.stack,
        });
    }
}
//# sourceMappingURL=index.js.map