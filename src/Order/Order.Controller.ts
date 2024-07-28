import { Body, Controller, Get, Param, Post ,ParseUUIDPipe } from "@nestjs/common";
import { CreateOrderDto } from "../DTO´S/OrderDTO";
import { OrderService } from "./Order.services";



@Controller("orders")
export class OrderController{
    constructor(private readonly orderService : OrderService){}

@Post()
addOrder(@Body() order : CreateOrderDto){
   return this.orderService.addOrder(order)
}

@Get(":id")
getOrder(@Param("id" , ParseUUIDPipe) id:string){
    return this.orderService.getOrder(id)
}

}