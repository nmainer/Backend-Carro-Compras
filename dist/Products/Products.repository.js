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
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("../Entities/Products/products.entity");
const typeorm_2 = require("typeorm");
const categories_entity_1 = require("../Entities/Categories/categories.entity");
let ProductsRepository = class ProductsRepository {
    constructor(repositoryProduct, repositoryCategory) {
        this.repositoryProduct = repositoryProduct;
        this.repositoryCategory = repositoryCategory;
    }
    async getProducts(page, limit) {
        const skipe = (page - 1) * limit;
        const valoresprod = await this.repositoryProduct.find({
            skip: skipe,
            take: limit,
            relations: ["category"]
        });
        return valoresprod;
    }
    async getNewProduct(product) {
        for (const produ of product) {
            const categoria = await this.repositoryCategory.findOne({ where: { name: produ.category } });
            if (categoria) {
                const productExist = await this.repositoryProduct.findOne({ where: { name: produ.name } });
                if (!productExist) {
                    const newProduct = new products_entity_1.Product();
                    newProduct.name = produ.name,
                        newProduct.description = produ.description,
                        newProduct.price = produ.price,
                        newProduct.stock = produ.stock;
                    newProduct.category = categoria;
                    await this.repositoryProduct.save(newProduct);
                }
                else {
                    throw new common_1.HttpException(`el producto ya existe`, common_1.HttpStatus.BAD_REQUEST);
                }
            }
        }
        return `producto/s creado/s`;
    }
    async putProduct(id, product) {
        const productnew = await this.repositoryProduct.findOneBy({ id });
        if (productnew) {
            const actualizer = { ...productnew, ...product };
            await this.repositoryProduct.save(actualizer);
            return `producto con N° id ${id} fue modificado`;
        }
        throw new common_1.HttpException(`id no encontrado`, common_1.HttpStatus.NOT_FOUND);
    }
    async deleteProduct(id) {
        const productId = await this.repositoryProduct.findOneBy({ id });
        if (productId) {
            this.repositoryProduct.delete(productId);
            return ` el producto con id N° ${id} fue eliminado`;
        }
        throw new common_1.HttpException(`id no encontrado`, common_1.HttpStatus.NOT_FOUND);
    }
    async productId(id) {
        const productId = this.repositoryProduct.findOne({ where: { id } });
        if (productId) {
            return productId;
        }
        throw new common_1.HttpException(`id no encontrado`, common_1.HttpStatus.NOT_FOUND);
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsRepository);
//# sourceMappingURL=Products.repository.js.map