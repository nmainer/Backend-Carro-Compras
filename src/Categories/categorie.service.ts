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


   async addCategories(category:ArrayCategoryDTO) : Promise<Category[]> {
      let valor;
      for (const categoryDtO of category.categorias){

        const categoryExist = await this.categoryRepository.findOne({where: {name: categoryDtO.name}});
        if(!categoryExist){
        valor =  await  this.categoryRepository.save(categoryDtO)
        } else{
          throw new Error ("Ya existe esta categoria")
        }
      }
        return valor;
    }
}