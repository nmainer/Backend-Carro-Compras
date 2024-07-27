"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorieModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categories_entity_1 = require("../Entities/Categories/categories.entity");
const categorie_service_1 = require("./categorie.service");
const categorie_controller_1 = require("./categorie.controller");
let CategorieModule = class CategorieModule {
};
exports.CategorieModule = CategorieModule;
exports.CategorieModule = CategorieModule = __decorate([
    (0, common_1.Module)({
        providers: [categorie_service_1.CategoryService],
        controllers: [categorie_controller_1.CategoryController],
        imports: [typeorm_1.TypeOrmModule.forFeature([categories_entity_1.Category])]
    })
], CategorieModule);
;
//# sourceMappingURL=categorie.module.js.map