import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { ProductsRepository } from "./Products.repository";

@Module({
    imports:[],
    providers:[ProductsService , ProductsRepository],
    controllers:[ProductsController]
})

export class ProductsModule{};