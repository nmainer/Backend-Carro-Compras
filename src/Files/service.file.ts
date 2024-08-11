import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CloudinaryServices } from "../Cloudinary/cloudinary.services";
import { ProductsRepository } from "../Products/Products.repository";




@Injectable()
export class ServiceFile {
    constructor(private readonly serviceProduct: ProductsRepository ,
        private readonly serviceCloudinary : CloudinaryServices
    ){}

    async addFile(id,file){

        const imgurl = await this.serviceCloudinary.uploadImage(file);
        const urlImg = imgurl.secure_url;

        const product= await this.serviceProduct.productId(id);

        if(product){
            product.imgUrl = urlImg ;
           await this.serviceProduct.putProduct(id,product); 
           return product;   
        } else{
           throw new HttpException("error al actualizar producto" , HttpStatus.NOT_FOUND);
        }
    }
}