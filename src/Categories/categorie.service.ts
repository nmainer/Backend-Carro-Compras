import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/Entities/Categories/categories.entity";
import { categoryDTO } from "src/Entities/Categories/categoryDTO";
import { Repository } from "typeorm";


@Injectable()
export class CategoryService {
    constructor( @InjectRepository(Category)
    private  categoryRepository : Repository<Category>){}


    getCategories() : Promise<Category[]>  {
        return this.categoryRepository.find()
    }


   async addCategories(category:categoryDTO[]) : Promise<string> {

      for (const categoryDtO of category){

        const categoryExist = await this.categoryRepository.findOne({where: {name: categoryDtO.name}});
        if(!categoryExist){
         await  this.categoryRepository.save(categoryDtO)
         
        }
      }
        return `categorias creadas`
    }
}