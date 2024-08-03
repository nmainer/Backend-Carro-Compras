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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../Users/user.service");
const UserDto_1 = require("../DTO\u00B4S/UserDto");
const Auth_guard_1 = require("../Guard/Auth.guard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers(page = 1, limit = 5) {
        return this.userService.getUsers(page, limit);
    }
    getUserByEmail(email) {
        return this.userService.getByEmail(email);
    }
    getPostUsers(us) {
        return this.userService.getNewUser(us);
    }
    getPutUsers(id, userdto) {
        return this.userService.getPutUsers(id, userdto);
    }
    deleteUser(id) {
        return this.userService.deleteUser(id);
    }
    getUserbyId(id) {
        return this.userService.getUserbyId(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserByEmail", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)("newUser"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getPostUsers", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(":id"),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UserDto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getPutUsers", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(":id"),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserbyId", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map