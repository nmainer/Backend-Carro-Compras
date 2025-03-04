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
exports.CategoryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const categorie_service_1 = require("./categorie.service");
const categoryDTO_1 = require("../DTO\u00B4S/categoryDTO");
const swagger_1 = require("@nestjs/swagger");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    getCategories() {
        return this.categoryService.getCategories();
    }
    async addCategories(category) {
        try {
            return await this.categoryService.addCategories(category);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                const status = error.getStatus();
                return {
                    statusCode: status,
                    message: error.message
                };
            }
        }
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../Entities/Categories/categories.entity").Category] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Post)("seeder"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categoryDTO_1.ArrayCategoryDTO]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "addCategories", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)("Categories"),
    (0, common_1.Controller)("categories"),
    __metadata("design:paramtypes", [categorie_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=categorie.controller.js.map