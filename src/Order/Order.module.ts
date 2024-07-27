import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderController } from "./Order.Controller";
import { Order } from "src/Entities/Orders/Orders.entity";
import { User } from "src/Entities/Users/Users.entity";
import { Product } from "src/Entities/Products/products.entity";
import { OrderDetail } from "src/Entities/OrderDetails/OrderDet.entity";
import { OrderService } from "./Order.services";

@Module({
    imports:[TypeOrmModule.forFeature([Order ,User ,Product ,OrderDetail])],
    providers:[OrderService],
    controllers:[OrderController]
})

export class ModuleOrder{}
