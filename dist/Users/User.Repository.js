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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Users_entity_1 = require("../Entities/Users/Users.entity");
const typeorm_2 = require("typeorm");
let UsersRepository = class UsersRepository {
    constructor(repositoryUser) {
        this.repositoryUser = repositoryUser;
    }
    async getRepository(page, limit) {
        const users = await this.repositoryUser.find({ relations: ["orders"] });
        const valorMap = users.map(us => ({ id: us.id, email: us.email, name: us.name, address: us.address, phone: us.phone,
            admin: us.admin, country: us.country, city: us.city, orders: us.orders
        }));
        const skip = (page - 1) * limit;
        const userPage = valorMap.slice(skip, skip + limit);
        return userPage;
    }
    async getUserId(id) {
        const us = await this.repositoryUser.findOne({ where: { id } });
        if (us) {
            return {
                id: us.id,
                email: us.email,
                name: us.name,
                address: us.address,
                phone: us.phone,
                country: us.country,
                city: us.city,
                orders: us.orders
            };
        }
        else {
            return { message: "Usuario inexistente" };
        }
    }
    async getNewUser(us) {
        const newUser = await this.repositoryUser.save(us);
        return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        };
    }
    async getUserByEmail(email) {
        const userByEmail = await this.repositoryUser.findOne({ where: { email } });
        return userByEmail;
    }
    async getPutUser(id, userdto) {
        const userid = await this.repositoryUser.findOne({ where: { id } });
        if (userid) {
            const users = { ...userid, ...userdto };
            await this.repositoryUser.save(users);
            return `ususario con id N°${users.id} fue modificado`;
        }
        throw new common_1.HttpException(`id no encontrado`, common_1.HttpStatus.NOT_FOUND);
    }
    async deleteUser(id) {
        const user = await this.repositoryUser.findOne({ where: { id } });
        if (user) {
            const valor = await this.repositoryUser.remove(user);
            return `el registro ${valor} fue eliminado`;
        }
        throw new common_1.HttpException(`id no encontrado`, common_1.HttpStatus.NOT_FOUND);
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersRepository);
//# sourceMappingURL=User.Repository.js.map