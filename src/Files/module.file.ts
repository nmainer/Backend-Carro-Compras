import { Module } from "@nestjs/common";
import { ControllerFile } from "./controller.file";
import { ServiceFile } from "./service.file";
import { CloudinaryServices } from "src/Cloudinary/cloudinary.services";
import configureCloudinary from "src/Config/cloudinary_config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/Entities/Products/products.entity";
import { ProductsRepository } from "src/Products/Products.repository";
import { Category } from "src/Entities/Categories/categories.entity";



@Module({ imports: [ TypeOrmModule.forFeature([Product ,Category])],
providers:[ServiceFile,CloudinaryServices,ProductsRepository, configureCloudinary] ,
controllers:[ControllerFile]
})

export class ModuleFile {};