import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./LoginDto";



@Controller("auth")
export class AuthController {
    constructor( private readonly authService : AuthService){}

    @Post("signin")
    getLogin(@Body() Login : LoginUserDto){
        return this.authService.getLogin(Login);
    }   
};

