import { Controller, Param, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ServiceFile } from "./service.file";
import { MinSizeAndFormat } from "src/Pipes/minSize.pipe";





@Controller("files/uploadImage")
export class ControllerFile {
    constructor(private readonly serviceFile: ServiceFile ){}

    @Put(":id")
    @UseInterceptors(FileInterceptor("file"))
    async addFile(@Param("id") id: string , @UploadedFile(new MinSizeAndFormat()) file: Express.Multer.File){
      console.log(file)
      return this.serviceFile.addFile(id, file);
    }
}