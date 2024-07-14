import { ProductsService } from "./products.service";
import { Product } from "./products.interface";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProduct(page?: number, limit?: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[]>;
    getPost(product: Product): Promise<string>;
    getPutproducts(id: string, product: Product): Promise<string>;
    deleteProducts(id: string): Promise<string>;
    getProductbyId(id: string): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    } | "id no encontrado">;
}
