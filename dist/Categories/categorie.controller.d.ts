import { CategoryService } from "./categorie.service";
import { Category } from "../Entities/Categories/categories.entity";
import { ArrayCategoryDTO } from "../DTO´S/categoryDTO";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCategories(): Promise<Category[]>;
    addCategories(category: ArrayCategoryDTO): Promise<string | {
        statusCode: number;
        message: string;
    }>;
}
