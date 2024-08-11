import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "../Entities/Categories/categories.entity";
import { CategoryService } from "./categorie.service";
import { CategoryController } from "./categorie.controller";


@Module({
    providers: [CategoryService],
    controllers:[CategoryController],
    imports:[TypeOrmModule.forFeature([Category])]
})
export class CategorieModule {};




