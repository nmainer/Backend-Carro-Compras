import { ProductsRepository } from "./Products.repository";
import { Product } from "./products.interface";
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(page: number, limit: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[]>;
    getNewProduct(product: Product): Promise<string>;
    putProduct(id: number, product: Product): Promise<string>;
    deleteProduct(id: number): Promise<string>;
    productId(id: number): Promise<"id no encontrado" | {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }>;
}
