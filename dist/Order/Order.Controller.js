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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const OrderDTO_1 = require("../DTO\u00B4S/OrderDTO");
const Order_services_1 = require("./Order.services");
const Auth_guard_1 = require("../Guard/Auth.guard");
const swagger_1 = require("@nestjs/swagger");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async addOrder(order) {
        try {
            return await this.orderService.addOrder(order);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                const status = error.getStatus();
                return {
                    statusCode: status,
                    message: error.message
                };
            }
            if (error instanceof common_1.NotFoundException) {
                const status = error.getStatus();
                return {
                    statusCode: status,
                    message: error.message
                };
            }
            else {
                throw new Error('Error desconocido');
            }
        }
    }
    getOrder(id) {
        return this.orderService.getOrder(id);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [OrderDTO_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "addOrder", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(":id"),
    (0, common_1.UseGuards)(Auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrder", null);
exports.OrderController = OrderController = __decorate([
    (0, swagger_1.ApiTags)("Orders"),
    (0, common_1.Controller)("orders"),
    __metadata("design:paramtypes", [Order_services_1.OrderService])
], OrderController);
//# sourceMappingURL=Order.Controller.js.map