import { Order } from "src/Entities/Orders/Orders.entity";
export interface user {
    email: string;
    name: string;
    password: string;
    address: string;
    phone: number;
    country: string;
    city: string;
}
export interface User2 {
    id: string;
    email: string;
    name: string;
    address: string;
    phone: number;
    country: string;
    city: string;
    orders: Order[];
}
export interface User3 {
    email: string;
    password: string;
}
