"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostProfileModule = void 0;
const common_1 = require("@nestjs/common");
const host_profile_service_1 = require("./host-profile.service");
const host_profile_controller_1 = require("./host-profile.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const supabase_module_1 = require("../supabase/supabase.module");
let HostProfileModule = class HostProfileModule {
};
exports.HostProfileModule = HostProfileModule;
exports.HostProfileModule = HostProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, supabase_module_1.SupabaseModule],
        controllers: [host_profile_controller_1.HostProfileController],
        providers: [host_profile_service_1.HostProfileService],
    })
], HostProfileModule);
//# sourceMappingURL=host-profile.module.js.map