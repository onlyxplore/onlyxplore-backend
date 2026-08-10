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
var HostProfileService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const supabase_service_1 = require("../supabase/supabase.service");
let HostProfileService = HostProfileService_1 = class HostProfileService {
    prisma;
    supabaseService;
    logger = new common_1.Logger(HostProfileService_1.name);
    constructor(prisma, supabaseService) {
        this.prisma = prisma;
        this.supabaseService = supabaseService;
    }
    async getProfile(userId) {
        return this.prisma.hostProfile.findUnique({
            where: { userId },
        });
    }
    async upsertProfile(userId, data) {
        try {
            if (data.profilePhoto && data.profilePhoto.startsWith('data:image')) {
                this.logger.log(`Uploading profile photo for user ${userId}`);
                data.profilePhoto = await this.supabaseService.uploadBase64Image(data.profilePhoto, 'uploads', 'avatars');
            }
            if (data.logo && data.logo.startsWith('data:image')) {
                this.logger.log(`Uploading logo for user ${userId}`);
                data.logo = await this.supabaseService.uploadBase64Image(data.logo, 'uploads', 'logo');
            }
        }
        catch (e) {
            const error = e;
            this.logger.error(`Failed to upload images: ${error.message}`);
            throw error;
        }
        const updateData = { ...data };
        if (updateData.username === '') {
            updateData.username = null;
        }
        try {
            return await this.prisma.hostProfile.upsert({
                where: { userId },
                update: updateData,
                create: {
                    userId,
                    ...updateData,
                },
            });
        }
        catch (e) {
            const error = e;
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('Username is already taken');
            }
            throw e;
        }
    }
};
exports.HostProfileService = HostProfileService;
exports.HostProfileService = HostProfileService = HostProfileService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], HostProfileService);
//# sourceMappingURL=host-profile.service.js.map