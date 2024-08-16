import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query, Req, UseGuards } from "@nestjs/common";
import { UserService } from "../Users/user.service";
import { CreateUserDto } from "../DTO´S/UserDto";
import { AuthGuard } from "../Guard/Auth.guard";
import { CredentialDto } from "../DTO´S/LoginDto";
import { Request } from "express";
import { RolesGuard } from "../Guard/Roles.guard";
import { Roles } from "../Roles/Roles.decorator";
import { Rol } from "../Enum/Roles.enum";






@Controller("users")
export class UserController{
    constructor( private readonly userService : UserService){}

    
    @HttpCode(200)
    @Get()
    @Roles(Rol.admin)
    @UseGuards(AuthGuard , RolesGuard)
    getUsers(@Query("page") page : number = 1 , @Query("limit") limit : number = 5 ) {
    return this.userService.getUsers(page,limit)
    }

    @Get("auth/user")
      userByAuth (@Req() req:Request){
     return JSON.stringify(req.oidc.user)
      }

    @HttpCode(201)
    @Post()
    getUserByEmail(@Body() email: string){
      return this.userService.getByEmail(email)
    }

    @HttpCode(201)
    @Post("newUser")
    getPostUsers(@Body() us: CreateUserDto){
      return this.userService.getNewUser(us)
    }
    
    @HttpCode(200)
    @Put(":id")
    @UseGuards(AuthGuard)
    getPutUsers(@Param("id" , ParseUUIDPipe) id : string , @Body() userdto: CreateUserDto){

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
  
      return this.userService.getUserbyId(id);
      
     }
       
} 
        

