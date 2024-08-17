import { ProductsRepository } from "./Products.repository";
import { Product } from "../Entities/Products/products.entity";
import { ProductsDto } from "../DTO´S/ProductsDto";
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(page: number, limit: number): Promise<Product[]>;
    getNewProduct(product: ProductsDto): Promise<string>;
    putProduct(id: string, product: Product): Promise<string>;
    deleteProduct(id: string): Promise<string>;
    productId(id: string): Promise<Product>;
}
