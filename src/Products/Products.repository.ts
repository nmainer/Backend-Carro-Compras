import { Injectable } from "@nestjs/common";
import { Product } from "./products.interface";


@Injectable()
export class ProductsRepository {

    
constructor(){}
private products = [
{
id:1,
name: "producto 1",
description: "varios",
price: 55,
stock: true,
imgUrl: "jpg.jpg"
},
{
id:2,
name: "producto 2",
description: "varios",
price: 1155,
stock: true,
imgUrl: "jpg.jpg"}
];

 async getProducts(page: number , limit:number){
    const productos = this.products;
    const skipe = (page-1)*limit;
    return productos.slice(skipe , skipe+limit)
}
async getNewProduct(product: Product) {
 const id = this.products.length + 1 ;
 this.products= [...this.products , {id,...product}]
 return `producto con N° de id ${id} creado`
}
async putProduct(id: number, product: Product) {
    const productIndex = await this.products.findIndex(elemento =>elemento.id ===id);
    if(productIndex!== -1){
        const elem = this.products[productIndex]
        const actualizer = {...elem ,...product}
        this.products[productIndex] = actualizer;
        return `producto con N° id ${id} fue modificado`
    }
    return `id no encontrado`
}
async deleteProduct(id: number) {
    const productId = await this.products.findIndex(elemento =>elemento.id ===id);
    if (productId !== -1){
        this.products.splice(productId , 1)
        return ` el producto con id N° ${id} fue eliminado`
    }
    return `id inexistente`
}

async productId(id: number) {
   const valor =  this.products.find(elemento =>elemento.id ===id);
   if(valor){
    return valor;
   }
   return `id no encontrado`
}
}