import { CreateOrderDto } from "../DTO´S/OrderDTO";
import { OrderService } from "./Order.services";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    addOrder(order: CreateOrderDto): Promise<string | import("../DTO\u00B4S/OrderDTO").OrderDto | {
        statusCode: number;
        message: string;
    }>;
    getOrder(id: string): Promise<import("../DTO\u00B4S/OrderDTO").OrderDto>;
}
