import { ProductsService } from "./products.service";
import { Product } from "../Entities/Products/products.entity";
import { ProductsDto } from "../DTO´S/ProductsDto";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProduct(page?: number, limit?: number): Promise<Product[]>;
    getPost(product: ProductsDto): Promise<string>;
    getPutproducts(id: string, product: Product): Promise<string>;
    deleteProducts(id: string): Promise<string>;
    getProductbyId(id: string): Promise<Product>;
}
