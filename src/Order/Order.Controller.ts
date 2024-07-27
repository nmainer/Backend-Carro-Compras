import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrderDTO } from "./OrderDTO";
import { OrderService } from "./Order.services";



@Controller("orders")
export class OrderController{
    constructor(private readonly orderService : OrderService){}

@Post()
addOrder(@Body() order : OrderDTO){
   return this.orderService.addOrder(order)
}

@Get(":id")
getOrder(@Param("id") id:string){
    return this.orderService.getOrder(id)
}

}