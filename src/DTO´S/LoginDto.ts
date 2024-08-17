import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CredentialDto {

@ApiProperty({
    description:"Aqui va el email regitrado",
    example:"mail@mail.com"
})
@IsNotEmpty()
@IsEmail()
email: string

@ApiProperty({
    description:"Aqui va la contraseña registrada",
    example:"1234LU&/$"
})
@IsNotEmpty()
@IsString()
password:string

}

