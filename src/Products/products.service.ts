import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./Products.repository";
import { Product } from "src/Entities/Products/products.entity";
import { ProductsDto } from "./ProductsDto";






@Injectable()
export class ProductsService {
   
    constructor ( private readonly productsRepository : ProductsRepository){}

    getProducts (page:number , limit:number){
        return this.productsRepository.getProducts(page,limit);
    }
    getNewProduct(product:ProductsDto[]) {
        return this.productsRepository.getNewProduct(product);
    }
    putProduct(id:string, product: Product) {
     return this.productsRepository.putProduct(id , product);
    }
    deleteProduct(id : string) {
       return this.productsRepository.deleteProduct(id);
    }
    productId(id: string) {
       return this.productsRepository.productId(id);
    }
}