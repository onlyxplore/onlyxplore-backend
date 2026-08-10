"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const crypto_1 = require("crypto");
let TokenService = class TokenService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateTwoFactorToken(email) {
        const token = (0, crypto_1.randomInt)(100000, 1000000).toString();
        const expires = new Date(new Date().getTime() + 15 * 60 * 1000);
        const existingToken = await this.prisma.twoFactorToken.findFirst({
            where: { email },
        });
        if (existingToken) {
            await this.prisma.twoFactorToken.delete({
                where: { id: existingToken.id },
            });
        }
        const twoFactorToken = await this.prisma.twoFactorToken.create({
            data: { email, token, expires },
        });
        return twoFactorToken;
    }
    async generatePasswordResetToken(email) {
        const token = (0, crypto_1.randomUUID)();
        const expires = new Date(new Date().getTime() + 3600 * 1000);
        const existingToken = await this.prisma.passwordResetToken.findFirst({
            where: { email },
        });
        if (existingToken) {
            await this.prisma.passwordResetToken.delete({
                where: { id: existingToken.id },
            });
        }
        const passwordResetToken = await this.prisma.passwordResetToken.create({
            data: { email, token, expires },
        });
        return passwordResetToken;
    }
    async generateVerificationToken(email) {
        const token = (0, crypto_1.randomUUID)();
        const expires = new Date(new Date().getTime() + 3600 * 1000);
        const existingToken = await this.prisma.verificationToken.findFirst({
            where: { email },
        });
        if (existingToken) {
            await this.prisma.verificationToken.delete({
                where: { id: existingToken.id },
            });
        }
        const verificationToken = await this.prisma.verificationToken.create({
            data: { email, token, expires },
        });
        return verificationToken;
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TokenService);
//# sourceMappingURL=token.service.js.map