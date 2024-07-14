import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { ProductsRepository } from "./Products.repository";
import { AuthGuard } from "src/Auth/Auth.guard";

@Module({
    imports:[],
    providers:[ProductsService , ProductsRepository ,AuthGuard],
    controllers:[ProductsController]
})

export class ProductsModule{};