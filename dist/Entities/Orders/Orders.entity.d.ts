import { User } from "../Users/Users.entity";
import { OrderDetail } from "../OrderDetails/OrderDet.entity";
export declare class Order {
    id: string;
    date: Date;
    user: User;
    orderdetail: OrderDetail;
}
