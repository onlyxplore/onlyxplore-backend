"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const mail_service_1 = require("../mail/mail.service");
const token_service_1 = require("./token.service");
const bcrypt = __importStar(require("bcryptjs"));
let AuthService = class AuthService {
    prisma;
    jwtService;
    mailService;
    tokenService;
    constructor(prisma, jwtService, mailService, tokenService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.mailService = mailService;
        this.tokenService = tokenService;
    }
    async register(dto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.email },
            select: { id: true },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        await this.prisma.user.create({
            data: {
                name: dto.name,
                email: dto.email,
                password: hashedPassword,
                role: dto.role || 'USER',
            },
        });
        const verificationToken = await this.tokenService.generateVerificationToken(dto.email);
        await this.mailService.sendVerificationEmail(verificationToken.email, verificationToken.token);
        return { success: 'Confirmation email sent' };
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
            select: {
                id: true,
                name: true,
                email: true,
                emailVerified: true,
                password: true,
                role: true,
                isTwoFactorEnabled: true,
                image: true,
            },
        });
        if (!user || !user.email || !user.password) {
            throw new common_1.UnauthorizedException('Email does not exist!');
        }
        const passwordMatch = await bcrypt.compare(dto.password, user.password);
        if (!passwordMatch) {
            throw new common_1.UnauthorizedException('Invalid password!');
        }
        if (!user.emailVerified) {
            const verificationToken = await this.tokenService.generateVerificationToken(user.email);
            await this.mailService.sendVerificationEmail(verificationToken.email, verificationToken.token);
            return { success: 'Confirmation email sent!' };
        }
        if (user.isTwoFactorEnabled && user.email) {
            if (dto.code) {
                const twoFactorToken = await this.prisma.twoFactorToken.findFirst({
                    where: { email: user.email },
                });
                if (!twoFactorToken) {
                    throw new common_1.BadRequestException('Invalid Code');
                }
                if (twoFactorToken.token !== dto.code) {
                    throw new common_1.BadRequestException('Invalid Code');
                }
                const hasExpired = new Date(twoFactorToken.expires) < new Date();
                if (hasExpired) {
                    throw new common_1.BadRequestException('Code expired!');
                }
                await this.prisma.twoFactorToken.delete({
                    where: { id: twoFactorToken.id },
                });
                const existingConfirmation = await this.prisma.twoFactorConfirmation.findUnique({
                    where: { userId: user.id },
                });
                if (existingConfirmation) {
                    await this.prisma.twoFactorConfirmation.delete({
                        where: { id: existingConfirmation.id },
                    });
                }
                await this.prisma.twoFactorConfirmation.create({
                    data: { userId: user.id },
                });
            }
            else {
                const twoFactorToken = await this.tokenService.generateTwoFactorToken(user.email);
                await this.mailService.sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);
                return { twoFactor: true };
            }
        }
        const payload = {
            sub: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            isTwoFactorEnabled: user.isTwoFactorEnabled,
            image: user.image,
        };
        const accessToken = this.jwtService.sign(payload);
        return {
            accessToken,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                isTwoFactorEnabled: user.isTwoFactorEnabled,
                image: user.image,
            },
        };
    }
    async googleLogin(dto) {
        let user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user) {
            user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    name: dto.name,
                    image: dto.image,
                    emailVerified: new Date(),
                    role: dto.role || 'HOST',
                },
            });
        }
        else {
            if (!user.image && dto.image) {
                await this.prisma.user.update({
                    where: { id: user.id },
                    data: { image: dto.image },
                });
                user.image = dto.image;
            }
        }
        const existingAccount = await this.prisma.account.findUnique({
            where: {
                provider_providerAccountId: {
                    provider: 'google',
                    providerAccountId: dto.providerAccountId,
                },
            },
        });
        if (!existingAccount) {
            await this.prisma.account.create({
                data: {
                    userId: user.id,
                    type: 'oauth',
                    provider: 'google',
                    providerAccountId: dto.providerAccountId,
                },
            });
        }
        const payload = {
            sub: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            isTwoFactorEnabled: user.isTwoFactorEnabled,
            image: user.image,
        };
        const accessToken = this.jwtService.sign(payload);
        return {
            accessToken,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                isTwoFactorEnabled: user.isTwoFactorEnabled,
                image: user.image,
            },
        };
    }
    async verifyEmail(dto) {
        if (!dto.token) {
            throw new common_1.BadRequestException('Token is required!');
        }
        const existingToken = await this.prisma.verificationToken.findUnique({
            where: { token: dto.token },
        });
        if (!existingToken) {
            throw new common_1.BadRequestException('Token does not exist!');
        }
        const hasExpired = new Date(existingToken.expires) < new Date();
        if (hasExpired) {
            await this.prisma.verificationToken.delete({
                where: { id: existingToken.id },
            });
            throw new common_1.BadRequestException('Token has expired!');
        }
        const existingUser = await this.prisma.user.findUnique({
            where: { email: existingToken.email },
            select: { id: true },
        });
        if (!existingUser) {
            throw new common_1.BadRequestException('Email does not exist!');
        }
        await this.prisma.$transaction([
            this.prisma.user.update({
                where: { id: existingUser.id },
                data: {
                    emailVerified: new Date(),
                    email: existingToken.email,
                },
            }),
            this.prisma.verificationToken.delete({
                where: { id: existingToken.id },
            }),
        ]);
        return { success: 'Email verified successfully!' };
    }
    async resetPassword(dto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.email },
            select: { id: true },
        });
        if (!existingUser) {
            throw new common_1.BadRequestException('Email not found!');
        }
        const passwordResetToken = await this.tokenService.generatePasswordResetToken(dto.email);
        await this.mailService.sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token);
        return { success: 'Reset email sent!' };
    }
    async newPassword(dto) {
        if (!dto.token) {
            throw new common_1.BadRequestException('Token is missing!');
        }
        const existingToken = await this.prisma.passwordResetToken.findUnique({
            where: { token: dto.token },
        });
        if (!existingToken) {
            throw new common_1.BadRequestException('Invalid token!');
        }
        const hasExpired = new Date(existingToken.expires) < new Date();
        if (hasExpired) {
            throw new common_1.BadRequestException('Token is no longer active!');
        }
        const existingUser = await this.prisma.user.findUnique({
            where: { email: existingToken.email },
            select: { id: true },
        });
        if (!existingUser) {
            throw new common_1.BadRequestException('Email does not exist!');
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        await this.prisma.user.update({
            where: { id: existingUser.id },
            data: { password: hashedPassword },
        });
        await this.prisma.passwordResetToken.delete({
            where: { id: existingToken.id },
        });
        return { success: 'Password Updated!' };
    }
    async getMe(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                emailVerified: true,
                role: true,
                isTwoFactorEnabled: true,
                image: true,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        return user;
    }
    async updateSettings(userId, dto) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { id: true },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Unauthorized');
        }
        await this.prisma.user.update({
            where: { id: user.id },
            data: { ...dto },
        });
        return { success: 'Updated' };
    }
    async validateUserById(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                isTwoFactorEnabled: true,
                image: true,
            },
        });
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        mail_service_1.MailService,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map