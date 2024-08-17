import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product} from "../Entities/Products/products.entity";
import { Repository} from "typeorm";
import { Category } from "../Entities/Categories/categories.entity";
import { ProductsDto } from "../DTO´S/ProductsDto";



@Injectable()
export class ProductsRepository {

    
constructor(@InjectRepository(Product) private repositoryProduct : Repository<Product> ,
            @InjectRepository(Category) private repositoryCategory : Repository<Category>){}


async getProducts(page: number , limit:number): Promise<Product[]>{
    const skipe = (page-1) * limit;
    const valoresprod= await  this.repositoryProduct.find ({
        skip: skipe,
        take: limit,
        relations:["category"]
    })
    return valoresprod; 
}

async getNewProduct(product:ProductsDto) : Promise<string> {

  
  for (const produ of product.products) {


    const categoria = await this.repositoryCategory.findOne({where:{name: produ.category}});

    if(categoria){
        const productExist = await this.repositoryProduct.findOne({where:{name: produ.name}});
        
        if(!productExist){

            const newProduct =  new Product();
            newProduct.name = produ.name,
            newProduct.description = produ.description ,
            newProduct.price = produ.price,
            newProduct.stock = produ.stock
            newProduct.category = categoria

        await this.repositoryProduct.save(newProduct);
       
        
        } else {
            throw new Error(`el producto ya existe`)
        }
    }
  }
  return `producto/s creado/s`
}




async putProduct(id:string , product: Product):Promise<string> {

    const productnew = await this.repositoryProduct.findOneBy({id});


    if(productnew){
        const actualizer = {...productnew ,...product}

        await this.repositoryProduct.save(actualizer)
   
        return `producto con N° id ${id} fue modificado`
    }
    throw new Error(`id no encontrado`) 
}


async deleteProduct(id:string):Promise<string> {

    const productId = await this.repositoryProduct.findOneBy({id});
    if (productId){

        this.repositoryProduct.delete(productId)

        return ` el producto con id N° ${id} fue eliminado`
    }
    throw new Error(`id no encontrado`) 
}

async productId(id:string): Promise<Product> {
   const productId =  this.repositoryProduct.findOne({where:{id}});
   if(productId){
    return productId;
   }
   throw new Error(`id no encontrado`) 
}
}