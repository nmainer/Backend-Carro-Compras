import { Order } from "../Orders/Orders.entity";
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    country: string;
    address: string;
    city: string;
    admin: boolean;
    orders: Order[];
}
