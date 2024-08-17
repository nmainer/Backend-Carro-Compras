import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";



 class CategoryDTO{
    @IsString()
    name : string
}

export class ArrayCategoryDTO{
    @IsString()
    @ApiProperty({
        description:"Aqui se coloca  el array de nombres de categoria",
        example: [{name:"smartphone"},{name:"monitor"},{name:"mouse"}]
    })
    categorias: CategoryDTO[]
}