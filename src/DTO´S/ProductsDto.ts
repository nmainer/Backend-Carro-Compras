
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString} from "class-validator";


 class Product {

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



export class ProductsDto {
    @ApiProperty({
        description: "Aqui se coloca el array de objetos de productos ",
        example: [
            {
              name: "Iphone 15",
              description: "The best smartphone in the world",
              price: 199,
              stock: 12,
              category: "smartphone"
            },
            {
              name: "Samsung Galaxy S23",
              description: "The best smartphone in the world",
              price: 150,
              stock: 12,
              category: "smartphone"
            },
            {
              name: "Motorola Edge 40",
              description: "The best smartphone in the world",
              price: 179,
              stock: 12,
              category: "smartphone"
            }]
    })
    products: Product[]
}


