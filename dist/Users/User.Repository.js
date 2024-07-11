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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
let UsersRepository = class UsersRepository {
    constructor() {
        this.user = [
            {
                id: 1,
                email: "mail@mail.com",
                name: "nicolas",
                password: "1234",
                address: "Espora 308",
                phone: "455889",
                country: "Argentina",
                city: "Santa Fe"
            },
            {
                id: 2,
                email: "mail@mail.com",
                name: "maria",
                password: "1234",
                address: "Avellaneda 113",
                phone: "45587",
                country: "Argentina",
                city: "Cap Fed"
            }
        ];
    }
    async getRepository() {
        return this.user;
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersRepository);
//# sourceMappingURL=User.Repository.js.map