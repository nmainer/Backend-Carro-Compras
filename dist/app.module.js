"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./Users/user.module");
const products_module_1 = require("./Products/products.module");
const auth_module_1 = require("./Auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const typeorm_2 = require("./Config/typeorm");
const categorie_module_1 = require("./Categories/categorie.module");
const Order_module_1 = require("./Order/Order.module");
const module_file_1 = require("./Files/module.file");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => configService.get("typeorm")
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [typeorm_2.default],
            }),
            user_module_1.UserModule, Order_module_1.ModuleOrder, products_module_1.ProductsModule, auth_module_1.AuthModule, categorie_module_1.CategorieModule, module_file_1.ModuleFile, jwt_1.JwtModule.register({ global: true, signOptions: { expiresIn: "1h" }, secret: process.env.JWT_SECRET }),],
        providers: [],
        controllers: []
    })
], AppModule);
//# sourceMappingURL=app.module.js.map