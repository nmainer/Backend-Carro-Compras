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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AuthGuard = class AuthGuard {
    constructor(jwtServices) {
        this.jwtServices = jwtServices;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authorizationHeader = request.headers["authorization"];
        if (!authorizationHeader) {
            throw new common_1.UnauthorizedException('Authorization header missing');
        }
        const [scheme, token] = authorizationHeader.split(" ");
        if (scheme !== "Bearer" || !token) {
            throw new common_1.UnauthorizedException("Bearer or token not found");
        }
        try {
            const secret = process.env.JWT_SECRET;
            const payLoad = await this.jwtServices.verifyAsync(token, { secret: secret });
            payLoad.iat = new Date(payLoad.iat * 1000);
            payLoad.exp = new Date(payLoad.exp * 1000);
            request.user = payLoad;
            return true;
        }
        catch (err) {
            throw new common_1.UnauthorizedException("Token invalid");
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthGuard);
//# sourceMappingURL=Auth.guard.js.map