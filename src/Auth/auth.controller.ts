import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "./LoginDto";



@Controller("auth")
export class AuthController {
    constructor( private readonly authService : AuthService){}

    @Post("signin")
    getLogin(@Body() Login : UserDto){
        return this.authService.getLogin(Login);
    }   
};

