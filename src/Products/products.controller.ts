import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./products.interface";
import { AuthGuard } from "src/Auth/Auth.guard";


@Controller("products")
export class ProductsController{
    constructor(private readonly productsService : ProductsService){}

    @HttpCode(200)
    @Get()
    getProduct(@Query("page") page : number = 1 , @Query("limit") limit : number =5){
        return this.productsService.getProducts(page ,limit);
    }
    
    @HttpCode(201)
    @Post()
    @UseGuards(AuthGuard)
    getPost(@Body() product: Product){
        return this.productsService.getNewProduct(product);
    }
    
    @HttpCode(200)
    @Put(":id")
    @UseGuards(AuthGuard)
    getPutproducts(@Param("id") id : string , @Body() product: Product){
        const productId = Number(id);
        return this.productsService.putProduct(productId , product);
    }
    
    @HttpCode(200)
    @Delete(":id")
    @UseGuards(AuthGuard)
    deleteProducts(@Param("id") id : string){
     const productId = Number(id);
     return this.productsService.deleteProduct(productId)
    }
    @HttpCode(200)
    @Get(":id")
    @UseGuards(AuthGuard)
    getProductbyId(@Param("id") id: string){
      const productId = Number(id);
      return this.productsService.productId(productId);
    }
};



