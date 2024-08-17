import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEmail, IsEmpty, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches } from "class-validator";


export class CreateUserDto {



@IsEmail()
@IsNotEmpty({message: "la opcion email no debe estar vacia"})
@ApiProperty({
    description: "Debe ir un email valido",
    example: "mail.mail@gmail.com"
})
email:string 

@ApiProperty({
    description:"Debe ir un nombre identificatorio personal",
    example: "Nicolas"
})
@IsString()
@IsNotEmpty({message: "La opcion name no debe estar vacia"})
@Length(3,80 , {message: "la propiedad name debe contener un minimo de 3 hasta 80 caracteres"})
name:string


@IsString()
@Length(8,15, {message: "la propiedad password debe contener un minimo de 8 hasta 15 caracteres"})
@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,100}$/ , {
    message: "password debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*)"
})
@ApiProperty({
    description: "aqui se coloca el password deseado cumpliendo con los requisitos exigidos" ,
    example:  "Nic@1990"
})
password: string



@IsString()
@ApiProperty({
    description:"aqui se debe repetir misma contraseña",
    example:"Nic@1990"
})
confirmPassword: string



@IsString()
@Length(3,80, {message: "address debe contener un minimo de 3 hasta 80 caracteres"})
@ApiProperty({
    description:"aqui se coloca la direccion",
    example: "Saavedra 4353"
})
address: string



@IsNumber()
@IsNotEmpty({message: "la propiedad phone no debe estar vacia"})
@IsInt({message:"El num debe ser entero"})
@ApiProperty({
    description:"aqui se coloca numero telefonico",
    example: 4521878
})
phone: number


@IsString()
@Length(5,20, {message:"la propiedad country debe contener un minimo de 5 hasta 20 caracteres"})
@ApiProperty({
    description:"aqui se coloca el pais de residencia",
    example: "Argentina"
})

country: string


@IsString()
@Length(5,20, {message:"la propiedad country debe contener un minimo de 5 hasta 20 caracteres"})
@ApiProperty({
    description:"aqui se coloca ciudad donde esta viviendo",
    example: "Cap. Fed."
})
city: string

}


