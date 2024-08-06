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
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const Auth_guard_1 = require("../Guard/Auth.guard");
const products_entity_1 = require("../Entities/Products/products.entity");
const Roles_guard_1 = require("../Guard/Roles.guard");
const Roles_decorator_1 = require("../Roles/Roles.decorator");
const Roles_enum_1 = require("../Enum/Roles.enum");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    getProduct(page = 1, limit = 5) {
        return this.productsService.getProducts(page, limit);
    }
    getPost(product) {
        return this.productsService.getNewProduct(product);
    }
    getPutproducts(id, product) {
        const productId = id;
        return this.productsService.putProduct(productId, product);
    }
    deleteProducts(id) {
        const productId = id;
        return this.productsService.deleteProduct(productId);
    }
    getProductbyId(id) {
        const productId = id;
        return this.productsService.productId(productId);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProduct", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)("seeder"),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getPost", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(":id"),
    (0, Roles_decorator_1.Roles)(Roles_enum_1.Rol.admin),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard, Roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, products_entity_1.Product]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getPutproducts", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "deleteProducts", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(":id"),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductbyId", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)("products"),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
;
//# sourceMappingURL=products.controller.js.map