import { CategoryService } from "./categorie.service";
import { Category } from "../Entities/Categories/categories.entity";
import { categoryDTO } from "../Entities/Categories/categoryDTO";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCategories(): Promise<Category[]>;
    addCategories(category: categoryDTO[]): Promise<Category[]>;
}
