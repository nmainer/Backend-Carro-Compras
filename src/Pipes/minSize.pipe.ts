import {  FileTypeValidator, MaxFileSizeValidator, ParseFilePipe} from "@nestjs/common";



export class MinSizeAndFormat extends ParseFilePipe {
    constructor(){
       super({
        validators: [
            new MaxFileSizeValidator({
              maxSize : 200*1024,
            }),
            new FileTypeValidator({
              fileType: /(jpg|jpeg|png|webp)$/,
            })
        ]
       }) 
    } 
}