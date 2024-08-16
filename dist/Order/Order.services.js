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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Orders_entity_1 = require("../Entities/Orders/Orders.entity");
const Users_entity_1 = require("../Entities/Users/Users.entity");
const products_entity_1 = require("../Entities/Products/products.entity");
const OrderDet_entity_1 = require("../Entities/OrderDetails/OrderDet.entity");
let OrderService = class OrderService {
    constructor(repositoryOrder, repositoryUser, respositoryProduct) {
        this.repositoryOrder = repositoryOrder;
        this.repositoryUser = repositoryUser;
        this.respositoryProduct = respositoryProduct;
    }
    async addOrder(order) {
        const { userid, products } = order;
        const userById = await this.repositoryUser.findOne({ where: { id: userid } });
        if (!userById) {
            throw new common_1.HttpException(`usuario inexistente`, common_1.HttpStatus.NOT_FOUND);
        }
        const productsId = await this.respositoryProduct.find({ where: { id: (0, typeorm_2.In)(products) } });
        const productUnavailable = await productsId.filter(producto => producto.stock <= 0);
        if (productUnavailable.length > 0) {
            throw new common_1.HttpException(`el/los producto/s : ${productUnavailable.map(producto => producto.id).join(",")} no poseen stock`, common_1.HttpStatus.NOT_FOUND);
        }
        if (productsId.length !== products.length) {
            throw new common_1.HttpException(`uno o varios productos no encontrados`, common_1.HttpStatus.NOT_FOUND);
        }
        for (let i = 0; i < productsId.length; i = i + 1) {
            let producto = productsId[i];
            if (producto.stock < 1) {
                return `el/los producto/s : ${producto.id} no posee suficiente stock`;
            }
            else {
                producto.stock = producto.stock - 1;
                await this.respositoryProduct.save(producto);
            }
        }
        let valor = 0;
        for (const produ of productsId) {
            valor = valor + produ.price;
        }
        const orderDetail = new OrderDet_entity_1.OrderDetail();
        orderDetail.price = valor,
            orderDetail.products = productsId;
        const orden = new Orders_entity_1.Order();
        orden.date = new Date(),
            orden.user = userById,
            orden.orderdetail = orderDetail;
        await this.repositoryOrder.save(orden);
        return {
            id: orden.id,
            date: orden.date,
            user: {
                id: userById.id,
                name: userById.name
            },
            orderdetail: {
                id: orderDetail.id,
                price: orderDetail.price,
                products: productsId
            },
        };
    }
    async getOrder(id) {
        const orden = await this.repositoryOrder.findOne({ where: { id }, relations: ["user", "orderdetail", "orderdetail.products"] });
        return {
            id: orden.id,
            date: orden.date,
            user: {
                id: orden.user.id,
                name: orden.user.name
            },
            orderdetail: {
                id: orden.orderdetail.id,
                price: orden.orderdetail.price,
                products: orden.orderdetail.products
            },
        };
        ;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Orders_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(Users_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
//# sourceMappingURL=Order.services.js.map