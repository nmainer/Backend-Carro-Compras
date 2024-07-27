import { Type } from "class-transformer";
import { IsArray, IsDate, IsNumber, IsObject, IsString, isUUID, IsUUID,  ValidateNested } from "class-validator";


class ArrayProducts {
    @IsUUID()
    id: string
}

export class OrderDTO{
    @IsUUID()
    userid:string

    @IsArray()
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