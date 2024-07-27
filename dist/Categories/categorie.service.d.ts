import { Category } from "src/Entities/Categories/categories.entity";
import { categoryDTO } from "src/Entities/Categories/categoryDTO";
import { Repository } from "typeorm";
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    getCategories(): Promise<Category[]>;
    addCategories(category: categoryDTO[]): Promise<string>;
}
