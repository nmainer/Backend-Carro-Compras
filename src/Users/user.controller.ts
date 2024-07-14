import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UserService } from "../Users/user.service";
import { User } from "./interface.user";
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
    getPostUsers(@Body() us: User){
      return this.userService.getNewUser(us)
    }
    
    @HttpCode(200)
    @Put(":id")
    @UseGuards(AuthGuard)
    getPutUsers(@Param("id") id : string , @Body() userdto: userDto){
      const userId = Number(id)
     return this.userService.getPutUsers(userId , userdto)
    }
    
    @HttpCode(200)
    @Delete(":id")
    @UseGuards(AuthGuard)
    deleteUser(@Param("id") id : string){
     const userId = Number(id)
     return this.userService.deleteUser(userId);
    }
    
    @HttpCode(200)
    @Get(":id")
    @UseGuards(AuthGuard)
    getUserbyId(@Param("id") id : string){
      const  userId = Number(id)
    return this.userService.getUserbyId(userId)
    }
         
} 
        

