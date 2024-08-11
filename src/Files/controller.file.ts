import { Controller, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ServiceFile } from "./service.file";
import { MinSizeAndFormat } from "../Pipes/minSize.pipe";
import { AuthGuard } from "../Guard/Auth.guard";





@Controller("files/uploadImage")
export class ControllerFile {
    constructor(private readonly serviceFile: ServiceFile ){}

    @Post(":id")
    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor("file"))
    async addFile(@Param("id") id: string , @UploadedFile(new MinSizeAndFormat()) file: Express.Multer.File){
      console.log(file)
      return this.serviceFile.addFile(id, file);
    }
}