import { CloudinaryServices } from "src/Cloudinary/cloudinary.services";
import { ProductsRepository } from "src/Products/Products.repository";
export declare class ServiceFile {
    private readonly serviceProduct;
    private readonly serviceCloudinary;
    constructor(serviceProduct: ProductsRepository, serviceCloudinary: CloudinaryServices);
    addFile(id: any, file: any): Promise<import("../Entities/Products/products.entity").Product>;
}
