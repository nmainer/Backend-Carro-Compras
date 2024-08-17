import { Category } from "../Entities/Categories/categories.entity";
import { ArrayCategoryDTO } from "../DTO´S/categoryDTO";
import { Repository } from "typeorm";
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    getCategories(): Promise<Category[]>;
    addCategories(category: ArrayCategoryDTO): Promise<Category[]>;
}
