import { Controller, HttpException, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ServiceFile } from "./service.file";
import { MinSizeAndFormat } from "../Pipes/minSize.pipe";
import { AuthGuard } from "../Guard/Auth.guard";
import { ApiTags } from "@nestjs/swagger";



@ApiTags("Files")

@Controller("files/uploadImage")
export class ControllerFile {
    constructor(private readonly serviceFile: ServiceFile ){}

    @Post(":id")
    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor("file"))
    async addFile(@Param("id") id: string , @UploadedFile(new MinSizeAndFormat()) file: Express.Multer.File){
    try{
      return await this.serviceFile.addFile(id, file);
    } catch(error){
      if(error instanceof HttpException){
        const status = error.getStatus();
        return {
          statusCode: status,
          message: error.message
        }
      }
    }
      
    }
}