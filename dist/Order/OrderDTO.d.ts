declare class ArrayProducts {
    id: string;
}
export declare class OrderDTO {
    userid: string;
    products: ArrayProducts[];
}
declare class userDTO {
    id: string;
    name: string;
}
declare class producDTO {
    name: string;
    description: string;
    price: number;
    stock: number;
}
declare class orderDetDto {
    id: string;
    price: number;
    products: producDTO[];
}
export declare class OrderDto {
    id: string;
    date: Date;
    user: userDTO;
    orderdetail: orderDetDto;
}
export {};
