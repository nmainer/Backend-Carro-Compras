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
exports.Order = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Users_entity_1 = require("../Users/Users.entity");
const OrderDet_entity_1 = require("../OrderDetails/OrderDet.entity");
let Order = class Order {
    constructor() {
        this.id = (0, uuid_1.v4)();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, default: (0, uuid_1.v4)() }, date: { required: true, type: () => Date }, user: { required: true, type: () => require("../Users/Users.entity").User }, orderdetail: { required: true, type: () => require("../OrderDetails/OrderDet.entity").OrderDetail } };
    }
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], Order.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_entity_1.User, user => user.orders),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Users_entity_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => OrderDet_entity_1.OrderDetail, orderdetail => orderdetail.order, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", OrderDet_entity_1.OrderDetail)
], Order.prototype, "orderdetail", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)({ name: "orders" })
], Order);
//# sourceMappingURL=Orders.entity.js.map