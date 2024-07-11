import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./Products.repository";



@Injectable()
export class ProductsService {
    constructor (private readonly productsRepository : ProductsRepository){}


    getProducts (){
        return this.productsRepository.getProducts();
    }
}