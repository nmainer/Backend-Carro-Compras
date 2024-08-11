import { Body, Controller, Get, Param, Post ,ParseUUIDPipe, UseGuards } from "@nestjs/common";
import { CreateOrderDto } from "../DTO´S/OrderDTO";
import { OrderService } from "./Order.services";
import { AuthGuard } from "../Guard/Auth.guard";



@Controller("orders")
export class OrderController{
    constructor(private readonly orderService : OrderService){}

@Post()
@UseGuards(AuthGuard)
addOrder(@Body() order : CreateOrderDto){
   return this.orderService.addOrder(order)
}

@Get(":id")
@UseGuards(AuthGuard)
getOrder(@Param("id" , ParseUUIDPipe) id:string){
    return this.orderService.getOrder(id)
}

}