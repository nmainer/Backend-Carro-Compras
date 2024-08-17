import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsDate, IsNotEmpty, IsNumber, IsObject, IsString, isUUID, IsUUID,  ValidateNested } from "class-validator";


class ArrayProducts {
    @IsUUID()
    id: string
}

export class CreateOrderDto{
    @ApiProperty({
        description: "Aqui se coloca el usuario por su uuid" ,
        example:"55e8e852-5ac7-4589-8304-f7ece2bcabae",
    })
    @IsUUID()
    @IsNotEmpty({message: "la propiedad userid no debe estar vacia"})
    userid:string

    @ApiProperty({
        description: "Aqui se colocan los productos por su uuid" ,
        example: [
            {id:"67e506a2-1f72-42dc-992a-a38c8ddc39e5"} ,
            {id:"67e506a2-1f72-42dc-992a-a38c8ddc39e5"} 
          ]
    })

    @IsArray()
    @ArrayMinSize(1,{message: "la propiedad productos debe contener al menos 1 elemento"})
    @ValidateNested({each:true})
    @Type(()=>ArrayProducts)
    products: ArrayProducts[]

}

class userDTO {

    id:string
    name:string
    }
    class producDTO{
        name:string
        description:string
        price:number
        stock:number
    }
    class orderDetDto{
        id:string
        price:number
        products: producDTO[]
    }
    
    export class  OrderDto{
        id:string
        date:Date
        user:userDTO
        orderdetail:orderDetDto
    }