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
                phone: 455889,
                country: "Argentina",
                city: "Santa Fe"
            },
            {
                id: 2,
                email: "mail@mail.com",
                name: "maria",
                password: "1234",
                address: "Avellaneda 113",
                phone: 45587,
                country: "Argentina",
                city: "Cap Fed"
            }
        ];
    }
    async getRepository(page, limit) {
        const valores = this.user.map(us => ({ id: us.id, email: us.email, name: us.name, address: us.address, phone: us.phone,
            country: us.country, city: us.city
        }));
        const skip = (page - 1) * limit;
        const userPage = valores.slice(skip, skip + limit);
        return userPage;
    }
    async getUserId(id) {
        const us = await this.user.find(elemento => elemento.id === id);
        if (us) {
            return ({ id: us.id, email: us.email, name: us.name, address: us.address, phone: us.phone, country: us.country, city: us.city });
        }
        return `id N° ${id} es inexistente`;
    }
    async getNewUser(us) {
        const id = this.user.length + 1;
        this.user = [...this.user, { id, ...us }];
        return `id generado: ${id}`;
    }
    async getPutUser(id, userdto) {
        const userid = await this.user.findIndex(elemento => elemento.id === id);
        if (userid !== -1) {
            const users = this.user[userid];
            const userActualizer = { ...users, ...userdto };
            this.user[userid] = userActualizer;
            return `ususario con id N°${id} fue modificado`;
        }
        return `id no encontrado`;
    }
    async deleteUser(id) {
        const user = await this.user.findIndex(elemento => elemento.id === id);
        if (user !== -1) {
            const valor = this.user[user];
            this.user.splice(user, 1);
            return `el usuario con id N° ${id} fue eliminado`;
        }
        return `id no encontrado`;
    }
    async userByEmail(email) {
        const valor = this.user.find(elemento => elemento.email === email);
        return valor;
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersRepository);
//# sourceMappingURL=User.Repository.js.map