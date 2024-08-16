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
exports.RespositoryAuth = void 0;
const User_Repository_1 = require("../Users/User.Repository");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let RespositoryAuth = class RespositoryAuth {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async getLogin(Login) {
        const user = await this.userService.getUserByEmail(Login.email);
        if (!user) {
            throw new common_1.BadRequestException("Usuario no registrado");
        }
        const hashPassword = await bcrypt.compare(Login.password, user.password);
        if (!hashPassword) {
            throw new common_1.BadRequestException(`Usuario y/o contraseña incorrecta/s`);
            ;
        }
        if (!Login.email && !Login.password) {
            throw new common_1.BadRequestException("faltan datos");
        }
        const userPayLoad = {
            subscribe: user.id,
            id: user.id,
            email: user.email,
            admin: user.admin
        };
        const token = this.jwtService.sign(userPayLoad);
        return { success: "Registro exitoso", token };
    }
    async getRegister(Register) {
        if (Register.password !== Register.confirmPassword) {
            throw new Error("Las contraseñas deben coincidir");
        }
        const user = await this.userService.getUserByEmail(Register.email);
        if (user) {
            throw new common_1.HttpException("el email actual ya se encuentra registrado", common_1.HttpStatus.BAD_REQUEST);
        }
        const passwordHashed = await bcrypt.hash(Register.password, 10);
        if (!passwordHashed) {
            throw new common_1.BadRequestException("password could not hashed");
        }
        return this.userService.getNewUser({ ...Register, password: passwordHashed });
    }
};
exports.RespositoryAuth = RespositoryAuth;
exports.RespositoryAuth = RespositoryAuth = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [User_Repository_1.UsersRepository,
        jwt_1.JwtService])
], RespositoryAuth);
//# sourceMappingURL=RepositoryAuth.js.map