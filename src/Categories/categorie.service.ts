import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "../Entities/Categories/categories.entity";
import { ArrayCategoryDTO} from "../DTO´S/categoryDTO";
import { Repository } from "typeorm";


@Injectable()
export class CategoryService {
    constructor( @InjectRepository(Category)
    private  categoryRepository : Repository<Category>){}


    getCategories() : Promise<Category[]>  {
        return this.categoryRepository.find()
    }


   async addCategories(category:ArrayCategoryDTO) : Promise<string> {
    const existingCategories: string[] = [];
      for (const categoryDtO of category.categorias){

        const categoryExist = await this.categoryRepository.findOne({where: {name: categoryDtO.name}});
        if(!categoryExist){
        await  this.categoryRepository.save(categoryDtO)
        } else{
          existingCategories.push(categoryDtO.name) 
        } 
      }
      if( existingCategories.length>0){
        throw new Error (`Ya existen las siguientes categorías: ${existingCategories.join(",")}`)
      }
        return `Las categorias fueron cargadas`;
    }
}