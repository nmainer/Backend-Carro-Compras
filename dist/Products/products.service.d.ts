import { ProductsRepository } from "./Products.repository";
import { Product } from "src/Entities/Products/products.entity";
import { ProductsDto } from "./ProductsDto";
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(page: number, limit: number): Promise<Product[]>;
    getNewProduct(product: ProductsDto[]): Promise<string | Product>;
    putProduct(id: string, product: Product): Promise<string>;
    deleteProduct(id: string): Promise<string>;
    productId(id: string): Promise<string | Product>;
}
