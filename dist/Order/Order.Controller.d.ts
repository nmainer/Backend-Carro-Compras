import { OrderDTO } from "./OrderDTO";
import { OrderService } from "./Order.services";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    addOrder(order: OrderDTO): Promise<string | import("./OrderDTO").OrderDto>;
    getOrder(id: string): Promise<import("./OrderDTO").OrderDto>;
}
