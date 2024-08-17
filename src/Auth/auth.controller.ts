import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import {CredentialDto } from "../DTO´S/LoginDto";
import { CreateUserDto } from "../DTO´S/UserDto";
import { RespositoryAuth } from "./RepositoryAuth";
import { ApiTags } from "@nestjs/swagger";



@ApiTags("Auth")
@Controller("auth")
export class AuthController {
    constructor( private readonly authservice: AuthService){}
    
    @Post("signIn")
  async  singIn(@Body() Login : CredentialDto){
        try{
            return await this.authservice.SingIn(Login);
        }catch(error){
            if(error.message ==="Usuario no registrado"){
                throw new NotFoundException("Usuario no registrado")
            } else if (error.message === `Usuario y/o contraseña incorrecta/s`){
                throw new UnauthorizedException(`Usuario y/o contraseña incorrecta/s`)
            } else if(error.message ==="faltan datos"){
                throw new BadRequestException("faltan datos")
            } else {
                throw new HttpException ("Error inesperado" , HttpStatus.CONFLICT)
            }
        }
        
    }   
    @Post("singUp")
   async singUp (@Body() Register: CreateUserDto){
     try{
        return await this.authservice.SingUp(Register)
     }catch(error){
        if(error.message === "Las contraseñas deben coincidir"){
            throw new HttpException(error.message , HttpStatus.BAD_REQUEST)
        }
        else if(error.message === "el email actual ya se encuentra registrado"){
            throw new HttpException(error.message , HttpStatus.BAD_REQUEST)
        }
        else if (error.message === "password no fue hasheado"){
            throw new HttpException (error.message, HttpStatus.CONFLICT)
        }
        else {
            throw new HttpException("Error en el registro" , HttpStatus.BAD_REQUEST)
        }

     }
      
   
    }
};

