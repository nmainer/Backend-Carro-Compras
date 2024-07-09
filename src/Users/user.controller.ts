import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./user.service";



@Controller("users")
export class UserController{
    constructor(private readonly userService: UsersService){}

        @Get()
        getUsers(){
            return this.userService.getUsers();
        }

}
