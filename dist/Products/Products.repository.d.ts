import { Product } from "src/Entities/Products/products.entity";
import { Repository } from "typeorm";
import { Category } from "src/Entities/Categories/categories.entity";
import { ProductsDto } from "../DTO´S/ProductsDto";
export declare class ProductsRepository {
    private repositoryProduct;
    private repositoryCategory;
    constructor(repositoryProduct: Repository<Product>, repositoryCategory: Repository<Category>);
    getProducts(page: number, limit: number): Promise<Product[]>;
    getNewProduct(product: ProductsDto[]): Promise<Product | string>;
    putProduct(id: string, product: Product): Promise<string>;
    deleteProduct(id: string): Promise<string>;
    productId(id: string): Promise<Product | string>;
}
