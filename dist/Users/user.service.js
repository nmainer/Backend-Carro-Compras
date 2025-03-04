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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const User_Repository_1 = require("./User.Repository");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUsers(page, limit) {
        return this.userRepository.getRepository(page, limit);
    }
    async getUserbyId(id) {
        return this.userRepository.getUserId(id);
    }
    async getNewUser(us) {
        return this.userRepository.getNewUser(us);
    }
    async getByEmail(email) {
        return this.userRepository.getUserByEmail(email);
    }
    async getPutUsers(id, user) {
        return this.userRepository.getPutUser(id, user);
    }
    async deleteUser(id) {
        return this.userRepository.deleteUser(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [User_Repository_1.UsersRepository])
], UserService);
//# sourceMappingURL=user.service.js.map