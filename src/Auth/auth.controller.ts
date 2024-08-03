import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import {CredentialDto } from "../DTO´S/LoginDto";
import { CreateUserDto } from "src/DTO´S/UserDto";
import { RespositoryAuth } from "./RepositoryAuth";




@Controller("auth")
export class AuthController {
    constructor( private readonly authservice: AuthService){}

    @Post("signIn")
    singIn(@Body() Login : CredentialDto){
        return this.authservice.SingIn(Login);
    }   
    @Post("singUp")
    singUp (@Body() Register: CreateUserDto){
        return this.authservice.SingUp(Register)
    }
};

