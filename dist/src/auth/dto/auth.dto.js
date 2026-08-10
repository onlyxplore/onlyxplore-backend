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
exports.GoogleLoginDto = exports.UpdateSettingsDto = exports.VerifyEmailDto = exports.NewPasswordDto = exports.ResetPasswordDto = exports.LoginDto = exports.RegisterDto = void 0;
const class_validator_1 = require("class-validator");
const enums_1 = require("../../generated/prisma/enums");
class RegisterDto {
    email;
    name;
    password;
    role;
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Please enter a valid email address.' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2, { message: 'Name must be at least 2 characters' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "role", void 0);
class LoginDto {
    email;
    password;
    code;
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email, try again!' }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "code", void 0);
class ResetPasswordDto {
    email;
}
exports.ResetPasswordDto = ResetPasswordDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email is required, try again!' }),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "email", void 0);
class NewPasswordDto {
    password;
    token;
}
exports.NewPasswordDto = NewPasswordDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: 'Minimum of 6 characters required!' }),
    __metadata("design:type", String)
], NewPasswordDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], NewPasswordDto.prototype, "token", void 0);
class VerifyEmailDto {
    token;
}
exports.VerifyEmailDto = VerifyEmailDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyEmailDto.prototype, "token", void 0);
class UpdateSettingsDto {
    name;
}
exports.UpdateSettingsDto = UpdateSettingsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSettingsDto.prototype, "name", void 0);
class GoogleLoginDto {
    email;
    name;
    image;
    providerAccountId;
    role;
}
exports.GoogleLoginDto = GoogleLoginDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], GoogleLoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GoogleLoginDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GoogleLoginDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GoogleLoginDto.prototype, "providerAccountId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GoogleLoginDto.prototype, "role", void 0);
//# sourceMappingURL=auth.dto.js.map