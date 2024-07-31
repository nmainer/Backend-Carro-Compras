"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleFile = void 0;
const common_1 = require("@nestjs/common");
const controller_file_1 = require("./controller.file");
const service_file_1 = require("./service.file");
const cloudinary_services_1 = require("../Cloudinary/cloudinary.services");
const cloudinary_config_1 = require("../Config/cloudinary_config");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("../Entities/Products/products.entity");
const Products_repository_1 = require("../Products/Products.repository");
const categories_entity_1 = require("../Entities/Categories/categories.entity");
let ModuleFile = class ModuleFile {
};
exports.ModuleFile = ModuleFile;
exports.ModuleFile = ModuleFile = __decorate([
    (0, common_1.Module)({ imports: [typeorm_1.TypeOrmModule.forFeature([products_entity_1.Product, categories_entity_1.Category])],
        providers: [service_file_1.ServiceFile, cloudinary_services_1.CloudinaryServices, Products_repository_1.ProductsRepository, cloudinary_config_1.default],
        controllers: [controller_file_1.ControllerFile]
    })
], ModuleFile);
;
//# sourceMappingURL=module.file.js.map