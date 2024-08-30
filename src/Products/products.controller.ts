import { Body, ConflictException, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { AuthGuard } from "../Guard/Auth.guard";
import { Product } from "../Entities/Products/products.entity";
import { ProductsDto } from "../DTO´S/ProductsDto";
import { RolesGuard } from "../Guard/Roles.guard";
import { Roles } from "../Roles/Roles.decorator";
import { Rol } from "../Enum/Roles.enum";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";




@ApiTags("Products")
@Controller("products")
export class ProductsController{
    constructor(private readonly productsService : ProductsService){}
    @ApiBearerAuth()
    @HttpCode(200)
    @Get()
    getProduct(@Query("page") page : number = 1 , @Query("limit") limit : number =5){
        return this.productsService.getProducts(page ,limit);
    }
    
    @ApiBearerAuth()
    @HttpCode(201)
    @Post("seeder")
    @UseGuards(AuthGuard)
    async getPost(@Body() product:ProductsDto){

        try{
            return await this.productsService.getNewProduct(product);
        }catch(error){
            if(error instanceof ConflictException){
                const status= error.getStatus();
                return {
                    statusCode: status,
                    message: error.message
                }
            } else {
                throw new HttpException("Error inesperado", HttpStatus.CONFLICT)
            }
        }
        
    }
    @ApiBearerAuth()
    @HttpCode(200)
    @Put(":id")
    @Roles(Rol.admin)
    @UseGuards(AuthGuard , RolesGuard)
    async getPutproducts(@Param("id" ,ParseUUIDPipe) id : string , @Body() product: Partial<Product> ){
        const productId = id;
        try{
            return await  this.productsService.putProduct(productId , product);
        }catch(error){
            if(error instanceof ConflictException){
                const status= error.getStatus()
                return {
                    statusCode: status,
                    message: error.message
                }
            } else {
                throw new HttpException("Error inesperado", HttpStatus.CONFLICT)
            }
        }
       
    }
    @ApiBearerAuth()
    @HttpCode(200)
    @Delete(":id")
    @UseGuards(AuthGuard)
    async deleteProducts(@Param("id" ,ParseUUIDPipe) id : string){
     const productId = id;
     try{
        return await this.productsService.deleteProduct(productId)
     } catch (error){
        if(error instanceof ConflictException){
            const status = error.getStatus();
            return {
                statusCode: status,
                message: error.message
            }
        } else {
        throw new HttpException("Error inesperado", HttpStatus.CONFLICT) 
     }
    }
}

    @ApiBearerAuth()
    @HttpCode(200)
    @Get(":id")
    @UseGuards(AuthGuard)
    async getProductbyId(@Param("id" , ParseUUIDPipe) id: string){
      const productId = id;
      try{
        return await this.productsService.productId(productId);
      }catch(error){
        if(error instanceof ConflictException){
            const status = error.getStatus();
            return {
                statusCode: status,
                message: error.message
            }

        }else{
        throw new HttpException("Error inesperado", HttpStatus.CONFLICT) 
        }
      }  
    }
};



