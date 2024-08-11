import { Module } from "@nestjs/common";
import { ControllerFile } from "./controller.file";
import { ServiceFile } from "./service.file";
import { CloudinaryServices } from "../Cloudinary/cloudinary.services";
import configureCloudinary from "../Config/cloudinary_config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "../Entities/Products/products.entity";
import { ProductsRepository } from "../Products/Products.repository";
import { Category } from "../Entities/Categories/categories.entity";



@Module({ imports: [ TypeOrmModule.forFeature([Product ,Category])],
providers:[ServiceFile,CloudinaryServices,ProductsRepository, configureCloudinary] ,
controllers:[ControllerFile]
})

export class ModuleFile {};