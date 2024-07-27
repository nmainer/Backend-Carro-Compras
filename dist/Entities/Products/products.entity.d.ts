import { Category } from "../Categories/categories.entity";
import { OrderDetail } from "../OrderDetails/OrderDet.entity";
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: Category;
    orderdetail: OrderDetail[];
}
