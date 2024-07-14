import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./Products.repository";
import { Product } from "./products.interface";



@Injectable()
export class ProductsService {
   
    constructor (private readonly productsRepository : ProductsRepository){}

    getProducts (page:number , limit:number){
        return this.productsRepository.getProducts(page,limit);
    }
    getNewProduct(product: Product) {
        return this.productsRepository.getNewProduct(product);
    }
    putProduct(id:number, product: Product) {
     return this.productsRepository.putProduct(id , product);
    }
    deleteProduct(id : number) {
       return this.productsRepository.deleteProduct(id);
    }
    productId(id: number) {
       return this.productsRepository.productId(id);
    }
}