import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CredentialDto {

@ApiProperty({
    description:"Aqui va el email regitrado",
    example:"mail.mail@gmail.com"
})
@IsNotEmpty()
@IsEmail()
email: string

@ApiProperty({
    description:"Aqui va la contraseña registrada",
    example:"Nic@1990"
})
@IsNotEmpty()
@IsString()
password:string

}

