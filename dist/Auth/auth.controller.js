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
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const LoginDto_1 = require("../DTO\u00B4S/LoginDto");
const UserDto_1 = require("../DTO\u00B4S/UserDto");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authservice) {
        this.authservice = authservice;
    }
    async singIn(Login) {
        try {
            return await this.authservice.SingIn(Login);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                return {
                    statusCode: 404,
                    message: error.message
                };
            }
            else if (error instanceof common_1.UnauthorizedException) {
                return {
                    statusCode: 401,
                    message: error.message
                };
            }
            else if (error instanceof common_1.BadRequestException) {
                return {
                    statusCode: 400,
                    message: error.message
                };
            }
            else {
                throw new common_1.HttpException("Error inesperado", common_1.HttpStatus.CONFLICT);
            }
        }
    }
    async singUp(Register) {
        try {
            return await this.authservice.SingUp(Register);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                const status = error.getStatus();
                return {
                    statusCode: status,
                    message: error.message
                };
            }
            else {
                throw new common_1.HttpException("Error en el registro", common_1.HttpStatus.BAD_REQUEST);
            }
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("signIn"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto_1.CredentialDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "singIn", null);
__decorate([
    (0, common_1.Post)("singUp"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "singUp", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("Auth"),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map