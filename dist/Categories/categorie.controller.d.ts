import { CategoryService } from "./categorie.service";
import { Category } from "src/Entities/Categories/categories.entity";
import { categoryDTO } from "src/Entities/Categories/categoryDTO";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCategories(): Promise<Category[]>;
    addCategories(category: categoryDTO[]): Promise<string>;
}
