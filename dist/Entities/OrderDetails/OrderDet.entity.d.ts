import { Product } from "../Products/products.entity";
import { Order } from "../Orders/Orders.entity";
export declare class OrderDetail {
    id: string;
    price: number;
    products: Product[];
    order: Order;
}
