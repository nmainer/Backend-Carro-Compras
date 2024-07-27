import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UserService } from "../Users/user.service";
import { userDto } from "./UserDto";
import { AuthGuard } from "src/Auth/Auth.guard";




@Controller("users")
export class UserController{
    constructor( private readonly userService : UserService){}

    
    @HttpCode(200)
    @Get()
    @UseGuards(AuthGuard)
    getUsers(@Query("page") page : number = 1 , @Query("limit") limit : number = 5 ) {
    return this.userService.getUsers(page,limit)
    }

    @HttpCode(201)
    @Post()
    getPostUsers(@Body() us: userDto){
      return this.userService.getNewUser(us)
    }
    
    @HttpCode(200)
    @Put(":id")
    @UseGuards(AuthGuard)
    getPutUsers(@Param("id") id : string , @Body() userdto: userDto){

     return this.userService.getPutUsers(id , userdto)
    }
    
    @HttpCode(200)
    @Delete(":id")
    @UseGuards(AuthGuard)
    deleteUser(@Param("id") id : string){
     
     return this.userService.deleteUser(id);
    }
    
    @HttpCode(200)
    @Get(":id")
    @UseGuards(AuthGuard)
    getUserbyId(@Param("id") id : string){
     
    return this.userService.getUserbyId(id)
    }
         
} 
        

