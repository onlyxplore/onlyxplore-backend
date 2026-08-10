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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostProfileController = void 0;
const common_1 = require("@nestjs/common");
const host_profile_service_1 = require("./host-profile.service");
const update_host_profile_dto_1 = require("./dto/update-host-profile.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let HostProfileController = class HostProfileController {
    hostProfileService;
    constructor(hostProfileService) {
        this.hostProfileService = hostProfileService;
    }
    getProfile(req) {
        return this.hostProfileService.getProfile(req.user.id);
    }
    upsertProfile(req, updateHostProfileDto) {
        return this.hostProfileService.upsertProfile(req.user.id, updateHostProfileDto);
    }
};
exports.HostProfileController = HostProfileController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HostProfileController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_host_profile_dto_1.UpdateHostProfileDto]),
    __metadata("design:returntype", void 0)
], HostProfileController.prototype, "upsertProfile", null);
exports.HostProfileController = HostProfileController = __decorate([
    (0, common_1.Controller)('host-profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [host_profile_service_1.HostProfileService])
], HostProfileController);
//# sourceMappingURL=host-profile.controller.js.map