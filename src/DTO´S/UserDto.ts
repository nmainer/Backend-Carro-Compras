import { IsArray, IsEmail, IsEmpty, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches } from "class-validator";


export class CreateUserDto {

@IsEmail()
@IsNotEmpty({message: "la opcion email no debe estar vacia"})
email:string 

@IsString()
@IsNotEmpty({message: "La opcion name no debe estar vacia"})
@Length(3,80 , {message: "la propieadad name debe contener un minimo de 3 hasta 80 caracteres"})
name:string

@IsString()
@Length(8,15, {message: "la propiedad password debe contener un minimo de 8 hasta 15 caracteres"})
@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,100}$/ , {
    message: "password debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*)"
})
password: string

@IsString()
confirmPassword: string

@IsString()
@Length(3,80, {message: "address debe contener un minimo de 3 hasta 80 caracteres"})
address: string

@IsNumber()
@IsNotEmpty({message: "la propiedad phone no debe estar vacia"})
@IsInt({message:"El num debe ser entero"})
phone: number


@IsString()
@Length(5,20, {message:"la propiedad country debe contener un minimo de 5 hasta 20 caracteres"})
country: string

@IsString()
@Length(5,20, {message:"la propiedad country debe contener un minimo de 5 hasta 20 caracteres"})
city: string

}


