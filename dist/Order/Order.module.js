"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleOrder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Order_Controller_1 = require("./Order.Controller");
const Orders_entity_1 = require("../Entities/Orders/Orders.entity");
const Users_entity_1 = require("../Entities/Users/Users.entity");
const products_entity_1 = require("../Entities/Products/products.entity");
const OrderDet_entity_1 = require("../Entities/OrderDetails/OrderDet.entity");
const Order_services_1 = require("./Order.services");
let ModuleOrder = class ModuleOrder {
};
exports.ModuleOrder = ModuleOrder;
exports.ModuleOrder = ModuleOrder = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Orders_entity_1.Order, Users_entity_1.User, products_entity_1.Product, OrderDet_entity_1.OrderDetail])],
        providers: [Order_services_1.OrderService],
        controllers: [Order_Controller_1.OrderController]
    })
], ModuleOrder);
//# sourceMappingURL=Order.module.js.map