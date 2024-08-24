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
exports.ProductsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const Auth_guard_1 = require("../Guard/Auth.guard");
const products_entity_1 = require("../Entities/Products/products.entity");
const ProductsDto_1 = require("../DTO\u00B4S/ProductsDto");
const Roles_guard_1 = require("../Guard/Roles.guard");
const Roles_decorator_1 = require("../Roles/Roles.decorator");
const Roles_enum_1 = require("../Enum/Roles.enum");
const swagger_1 = require("@nestjs/swagger");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    getProduct(page = 1, limit = 5) {
        return this.productsService.getProducts(page, limit);
    }
    async getPost(product) {
        try {
            return await this.productsService.getNewProduct(product);
        }
        catch (error) {
            if (error.message.includes(`Ya existen los sig productos:`)) {
                throw new common_1.ConflictException(error.message);
            }
            else {
                throw new common_1.HttpException("Error inesperado", common_1.HttpStatus.CONFLICT);
            }
        }
    }
    async getPutproducts(id, product) {
        const productId = id;
        try {
            return await this.productsService.putProduct(productId, product);
        }
        catch (error) {
            if (error.message === `id no encontrado`) {
                throw new common_1.ConflictException(error.message);
            }
            else {
                throw new common_1.HttpException("Error inesperado", common_1.HttpStatus.CONFLICT);
            }
        }
    }
    async deleteProducts(id) {
        const productId = id;
        try {
            return await this.productsService.deleteProduct(productId);
        }
        catch (error) {
            if (error.message === `id no encontrado`) {
                throw new common_1.ConflictException(error.message);
            }
            else {
                throw new common_1.HttpException("Error inesperado", common_1.HttpStatus.CONFLICT);
            }
        }
    }
    async getProductbyId(id) {
        const productId = id;
        try {
            return await this.productsService.productId(productId);
        }
        catch (error) {
            if (error.message === `id no encontrado`) {
                throw new common_1.ConflictException(error.message);
            }
            else {
                throw new common_1.HttpException("Error inesperado", common_1.HttpStatus.CONFLICT);
            }
        }
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../Entities/Products/products.entity").Product] }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProduct", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)("seeder"),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductsDto_1.ProductsDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getPost", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(":id"),
    (0, Roles_decorator_1.Roles)(Roles_enum_1.Rol.admin),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard, Roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, products_entity_1.Product]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getPutproducts", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProducts", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(":id"),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    openapi.ApiResponse({ status: 200, type: require("../Entities/Products/products.entity").Product }),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductbyId", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)("Products"),
    (0, common_1.Controller)("products"),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
;
//# sourceMappingURL=products.controller.js.map