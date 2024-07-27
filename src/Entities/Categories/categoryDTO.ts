import { IsString } from "class-validator";



export class categoryDTO{
    @IsString()
    name : string
}