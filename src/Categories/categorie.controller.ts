import { Body, ConflictException, Controller, Get, HttpException, HttpStatus, Post } from "@nestjs/common";
import { CategoryService } from "./categorie.service";
import { Category } from "../Entities/Categories/categories.entity";
import { ArrayCategoryDTO } from "../DTO´S/categoryDTO";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Categories")
@Controller("categories")
export class CategoryController {
    constructor(private readonly categoryService : CategoryService){}

@Get()
getCategories(){
return this.categoryService.getCategories();
}


@Post("seeder")
async addCategories(@Body() category : ArrayCategoryDTO) : Promise<string>{
try{
    return await this.categoryService.addCategories(category)
}catch (error){
    if(error.message.includes(`Ya existen las siguientes categorías:`)){
        throw new ConflictException(error.message)
    }
}

}


}