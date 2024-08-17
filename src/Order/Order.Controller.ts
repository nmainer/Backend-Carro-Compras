import { Body, Controller, Get, Param, Post ,ParseUUIDPipe, UseGuards, BadRequestException, NotFoundException } from "@nestjs/common";
import { CreateOrderDto } from "../DTO´S/OrderDTO";
import { OrderService } from "./Order.services";
import { AuthGuard } from "../Guard/Auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";


@ApiTags("Orders")
@Controller("orders")
export class OrderController{
    constructor(private readonly orderService : OrderService){}
@ApiBearerAuth()
@Post()
@UseGuards(AuthGuard)
async addOrder(@Body() order : CreateOrderDto){
    try{
        return await this.orderService.addOrder(order)
    }catch(error){
        
            if (error.message.includes('no poseen stock')) {
              throw new BadRequestException("El/los productos seleccionados no posee/n stock");
            } else if (error.message ===`uno o varios productos no encontrados`) {
              throw new NotFoundException(error.message);
            } else {
              throw new Error('Error desconocido');
            }
    }
}

@ApiBearerAuth()
@Get(":id")
@UseGuards(AuthGuard)
getOrder(@Param("id" , ParseUUIDPipe) id:string){
    return this.orderService.getOrder(id)
}

}