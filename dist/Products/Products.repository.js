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
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
let ProductsRepository = class ProductsRepository {
    constructor() {
        this.products = [
            {
                id: 1,
                name: "producto 1",
                description: "varios",
                price: 55,
                stock: true,
                imgUrl: "jpg.jpg"
            },
            {
                id: 2,
                name: "producto 2",
                description: "varios",
                price: 1155,
                stock: true,
                imgUrl: "jpg.jpg"
            }
        ];
    }
    async getProducts(page, limit) {
        const productos = this.products;
        const skipe = (page - 1) * limit;
        return productos.slice(skipe, skipe + limit);
    }
    async getNewProduct(product) {
        const id = this.products.length + 1;
        this.products = [...this.products, { id, ...product }];
        return `producto con N° de id ${id} creado`;
    }
    async putProduct(id, product) {
        const productIndex = await this.products.findIndex(elemento => elemento.id === id);
        if (productIndex !== -1) {
            const elem = this.products[productIndex];
            const actualizer = { ...elem, ...product };
            this.products[productIndex] = actualizer;
            return `producto con N° id ${id} fue modificado`;
        }
        return `id no encontrado`;
    }
    async deleteProduct(id) {
        const productId = await this.products.findIndex(elemento => elemento.id === id);
        if (productId !== -1) {
            this.products.splice(productId, 1);
            return ` el producto con id N° ${id} fue eliminado`;
        }
        return `id inexistente`;
    }
    async productId(id) {
        const valor = this.products.find(elemento => elemento.id === id);
        if (valor) {
            return valor;
        }
        return `id no encontrado`;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ProductsRepository);
//# sourceMappingURL=Products.repository.js.map