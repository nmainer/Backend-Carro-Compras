import { Body, Controller, Get, HttpException, HttpStatus, Post } from "@nestjs/common";
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
addCategories(@Body() category : ArrayCategoryDTO) : Promise<Category[]>{
try{
    return this.categoryService.addCategories(category)
}catch (error){
    if(error.message === "Ya existe esta categoria"){
        throw new HttpException(error.message , HttpStatus.BAD_REQUEST)
    }
}

}


}