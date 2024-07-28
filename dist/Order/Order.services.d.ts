import { OrderDto, CreateOrderDto } from "../DTO´S/OrderDTO";
import { Repository } from "typeorm";
import { Order } from "src/Entities/Orders/Orders.entity";
import { User } from "src/Entities/Users/Users.entity";
import { Product } from "src/Entities/Products/products.entity";
export declare class OrderService {
    private repositoryOrder;
    private repositoryUser;
    private respositoryProduct;
    constructor(repositoryOrder: Repository<Order>, repositoryUser: Repository<User>, respositoryProduct: Repository<Product>);
    addOrder(order: CreateOrderDto): Promise<OrderDto | string>;
    getOrder(id: string): Promise<OrderDto>;
}
