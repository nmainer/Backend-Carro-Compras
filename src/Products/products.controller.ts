import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { AuthGuard } from "src/Guard/Auth.guard";
import { Product } from "src/Entities/Products/products.entity";
import { ProductsDto } from "../DTO´S/ProductsDto";



@Controller("products")
export class ProductsController{
    constructor(private readonly productsService : ProductsService){}

    @HttpCode(200)
    @Get()
    getProduct(@Query("page") page : number = 1 , @Query("limit") limit : number =5){
        return this.productsService.getProducts(page ,limit);
    }
    
    @HttpCode(201)
    @Post("seeder")
    @UseGuards(AuthGuard)
    getPost(@Body() product:ProductsDto[]){
        return this.productsService.getNewProduct(product);
    }
    
    @HttpCode(200)
    @Put(":id")
    @UseGuards(AuthGuard)
    getPutproducts(@Param("id" ,ParseUUIDPipe) id : string , @Body() product: Product){
        const productId = id;
        return this.productsService.putProduct(productId , product);
    }
    
    @HttpCode(200)
    @Delete(":id")
    @UseGuards(AuthGuard)
    deleteProducts(@Param("id" ,ParseUUIDPipe) id : string){
     const productId = id;
     return this.productsService.deleteProduct(productId)
    }
    @HttpCode(200)
    @Get(":id")
    @UseGuards(AuthGuard)
    getProductbyId(@Param("id" , ParseUUIDPipe) id: string){
      const productId = id;
      return this.productsService.productId(productId);
    }
};



