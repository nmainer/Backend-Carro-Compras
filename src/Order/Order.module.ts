import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderController } from "./Order.Controller";
import { Order } from "../Entities/Orders/Orders.entity";
import { User } from "../Entities/Users/Users.entity";
import { Product } from "../Entities/Products/products.entity";
import { OrderDetail } from "../Entities/OrderDetails/OrderDet.entity";
import { OrderService } from "./Order.services";

@Module({
    imports:[TypeOrmModule.forFeature([Order ,User ,Product ,OrderDetail])],
    providers:[OrderService],
    controllers:[OrderController]
})

export class ModuleOrder{}
