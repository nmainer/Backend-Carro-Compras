
import {  IsDecimal, IsNumber, IsOptional, IsString} from "class-validator";




export class ProductsDto {

@IsString()
@IsOptional()
name: string

@IsString()
@IsOptional()
description: string

@IsNumber()
price: number

@IsNumber()
@IsOptional()
stock:number

@IsString()
category:string

}


