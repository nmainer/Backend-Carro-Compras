import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Post, Put, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import {CredentialDto } from "../DTO´S/LoginDto";
import { CreateUserDto } from "../DTO´S/UserDto";
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
            if(error instanceof NotFoundException){
                return {
                   statusCode: 404,
                   message: error.message
                }
            } else if (error instanceof UnauthorizedException){
                return {
                   statusCode: 401,
                   message: error.message
                }

            } else if(error instanceof BadRequestException){
                return {
                    statusCode: 400,
                    message: error.message
                 }

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
        if(error instanceof HttpException){
            const status = error.getStatus();
            return{
                statusCode: status,
                message: error.message
            }
        }
        else {
            throw new HttpException("Error en el registro" , HttpStatus.BAD_REQUEST)
        }
     }
    }
    
}

