import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsDate, IsNotEmpty, IsNumber, IsObject, IsString, isUUID, IsUUID,  ValidateNested } from "class-validator";


class ArrayProducts {
    @IsUUID()
    id: string
}

export class CreateOrderDto{
    @IsUUID()
    @IsNotEmpty({message: "la propiedad userid no debe estar vacia"})
    userid:string

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