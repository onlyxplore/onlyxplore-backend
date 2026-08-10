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
var SupabaseService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseService = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
const uuid_1 = require("uuid");
let SupabaseService = SupabaseService_1 = class SupabaseService {
    supabase;
    logger = new common_1.Logger(SupabaseService_1.name);
    constructor() {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_KEY;
        if (!supabaseUrl || !supabaseKey) {
            throw new Error('Supabase URL and Key must be provided in .env');
        }
        this.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
    }
    async uploadBase64Image(base64String, bucket, folder) {
        try {
            const matches = base64String.match(/^data:([A-Za-z-+]+);base64,(.+)$/);
            if (!matches || matches.length !== 3) {
                throw new Error('Invalid base64 string format');
            }
            const mimeType = matches[1];
            const base64Data = matches[2];
            const extension = mimeType.split('/')[1] || 'png';
            const buffer = Buffer.from(base64Data, 'base64');
            const filename = `${folder}/${(0, uuid_1.v4)()}.${extension}`;
            const { error } = await this.supabase.storage
                .from(bucket)
                .upload(filename, buffer, {
                contentType: mimeType,
                upsert: true,
            });
            if (error) {
                this.logger.error(`Error uploading to Supabase: ${error.message}`);
                throw error;
            }
            const { data: urlData } = this.supabase.storage
                .from(bucket)
                .getPublicUrl(filename);
            return urlData.publicUrl;
        }
        catch (e) {
            const error = e;
            this.logger.error(`Failed to upload base64 image: ${error.message}`);
            throw error;
        }
    }
};
exports.SupabaseService = SupabaseService;
exports.SupabaseService = SupabaseService = SupabaseService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SupabaseService);
//# sourceMappingURL=supabase.service.js.map