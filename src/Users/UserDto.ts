import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class userDto {

@IsEmail()
@IsOptional()
email:string 

@IsString()
@IsOptional()
name:string

@IsString()
@IsOptional()
password: string

@IsString()
@IsOptional()
address: string

@IsNumber()
@IsOptional()
phone: number

@IsString()
@IsOptional()
country: string

@IsString()
@IsOptional()
city: string

}


