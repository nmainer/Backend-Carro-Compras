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
exports.OrderDetail = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const products_entity_1 = require("../Products/products.entity");
const Orders_entity_1 = require("../Orders/Orders.entity");
let OrderDetail = class OrderDetail {
    constructor() {
        this.id = (0, uuid_1.v4)();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, default: (0, uuid_1.v4)() }, price: { required: true, type: () => Number }, products: { required: true, type: () => [require("../Products/products.entity").Product] }, order: { required: true, type: () => require("../Orders/Orders.entity").Order } };
    }
};
exports.OrderDetail = OrderDetail;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], OrderDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => products_entity_1.Product, product => product.orderdetail),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], OrderDetail.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Orders_entity_1.Order, order => order.orderdetail),
    __metadata("design:type", Orders_entity_1.Order)
], OrderDetail.prototype, "order", void 0);
exports.OrderDetail = OrderDetail = __decorate([
    (0, typeorm_1.Entity)({ name: "orderDetails" })
], OrderDetail);
//# sourceMappingURL=OrderDet.entity.js.map