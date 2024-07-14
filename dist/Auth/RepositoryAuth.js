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
let RespositoryAuth = class RespositoryAuth {
    constructor(repositorioUser) {
        this.repositorioUser = repositorioUser;
    }
    async getLogin(Login) {
        if (!Login.email && !Login.password) {
            return "faltan datos";
        }
        const user = await this.repositorioUser.userByEmail(Login.email);
        if (!user) {
            return "usuario inexistente";
        }
        if (user && user.password === Login.password) {
            return `Acceso exitoso`;
        }
        else {
            return `Usuario y/o contraseña incorrecta/s`;
        }
    }
};
exports.RespositoryAuth = RespositoryAuth;
exports.RespositoryAuth = RespositoryAuth = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [User_Repository_1.UsersRepository])
], RespositoryAuth);
//# sourceMappingURL=RepositoryAuth.js.map