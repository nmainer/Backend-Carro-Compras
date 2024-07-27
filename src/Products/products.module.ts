import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { ProductsRepository } from "./Products.repository";
import { AuthGuard } from "src/Auth/Auth.guard";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/Entities/Products/products.entity";
import { Category } from "src/Entities/Categories/categories.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Product , Category])],
    providers:[ProductsService , ProductsRepository ,AuthGuard],
    controllers:[ProductsController]
})

export class ProductsModule{};