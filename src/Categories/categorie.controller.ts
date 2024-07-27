import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from "./categorie.service";
import { Category } from "src/Entities/Categories/categories.entity";
import { categoryDTO } from "src/Entities/Categories/categoryDTO";


@Controller("categories")
export class CategoryController {
    constructor(private readonly categoryService : CategoryService){}

@Get()
getCategories(){
return this.categoryService.getCategories();
}


@Post("seeder")
addCategories(@Body() category : categoryDTO[]) : Promise<string>{
return this.categoryService.addCategories(category)
}


}