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
exports.ProductsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class Product {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
class ProductsDto {
}
exports.ProductsDto = ProductsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Aqui se coloca el array de objetos de productos ",
        example: [
            {
                name: "Iphone 15",
                description: "The best smartphone in the world",
                price: 199,
                stock: 12,
                category: "smartphone"
            },
            {
                name: "Samsung Galaxy S23",
                description: "The best smartphone in the world",
                price: 150,
                stock: 12,
                category: "smartphone"
            },
            {
                name: "Motorola Edge 40",
                description: "The best smartphone in the world",
                price: 179,
                stock: 12,
                category: "smartphone"
            }
        ]
    }),
    __metadata("design:type", Array)
], ProductsDto.prototype, "products", void 0);
//# sourceMappingURL=ProductsDto.js.map