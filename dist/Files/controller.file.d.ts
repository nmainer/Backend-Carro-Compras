import { ServiceFile } from "./service.file";
export declare class ControllerFile {
    private readonly serviceFile;
    constructor(serviceFile: ServiceFile);
    addFile(id: string, file: Express.Multer.File): Promise<import("../Entities/Products/products.entity").Product | {
        statusCode: number;
        message: string;
    }>;
}
