import { IsBoolean, IsNumber, IsOptional, IsString} from "class-validator";

export class ProductsDto {

@IsString()
@IsOptional()
name: string

@IsString()
@IsOptional()
description: string

@IsNumber()
@IsOptional()
price: number

@IsBoolean()
@IsOptional()
stock:boolean

@IsString()
@IsOptional()
imgUrl: string

}







/*id:1,
name: "producto 2",
description: "varios",
price: 1155,
stock: true,
imgUrl: "jpg.jpg"}*/