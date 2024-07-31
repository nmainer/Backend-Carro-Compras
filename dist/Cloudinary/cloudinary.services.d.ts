import { UploadApiResponse } from "cloudinary";
export declare class CloudinaryServices {
    uploadImage(file: Express.Multer.File): Promise<UploadApiResponse>;
}
