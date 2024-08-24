import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsObject, IsString, ValidateNested } from "class-validator";



 class CategoryDTO{
    @IsString()
    name : string
}

export class ArrayCategoryDTO{
    @IsArray()

    @ApiProperty({
        description:"Aqui se coloca  el array de nombres de categoria",
        type:[CategoryDTO],
        example: [{name:"smartphone"},{name:"monitor"},{name:"mouse"}]
    })
    @ValidateNested({each:true})
    @Type(()=>CategoryDTO)
    categorias: CategoryDTO[]
}