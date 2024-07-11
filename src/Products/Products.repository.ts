import { Injectable } from "@nestjs/common";


@Injectable()
export class ProductsRepository {
    constructor(){}
private products = [
{id:1,
name: "producto 1",
description: "varios",
price: 55,
stock: true,
imgUrl: "jpg.jpg"
},
{id:1,
name: "producto 2",
description: "varios",
price: 1155,
stock: true,
imgUrl: "jpg.jpg"}
];

 async getProducts(){
    return this.products
}
}