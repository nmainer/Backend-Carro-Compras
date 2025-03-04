import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, ParseUUIDPipe, Post, Put, Query, Req, UseGuards } from "@nestjs/common";
import { UserService } from "../Users/user.service";
import { CreateUserDto } from "../DTO´S/UserDto";
import { AuthGuard } from "../Guard/Auth.guard";
import { Request } from "express";
import { RolesGuard } from "../Guard/Roles.guard";
import { Roles } from "../Roles/Roles.decorator";
import { Rol } from "../Enum/Roles.enum";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";





@ApiTags("User")
@Controller("users")
export class UserController{
    constructor( private readonly userService : UserService){}

    @ApiBearerAuth()
    @HttpCode(200)
    @Get()
    @Roles(Rol.admin)
    @UseGuards(AuthGuard ,RolesGuard)
    getUsers( @Query("page") page : number = 1 , @Query("limit") limit : number = 5 ) {
    
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
    
    @ApiBearerAuth()
    @HttpCode(200)
    @Put(":id")
    @UseGuards(AuthGuard)
   async getPutUsers(@Param("id" , ParseUUIDPipe) id : string , @Body() userdto: Partial<CreateUserDto>){
     try{
      return await  this.userService.getPutUsers(id , userdto)
     }catch(error){
      if(error instanceof NotFoundException){
        const status = error.getStatus();
        return {
          statusCode: status ,
          message: error.message
        }
      }else {
        throw new HttpException( "Error inesperado", HttpStatus.CONFLICT)
      }
    }
  }

    @ApiBearerAuth()
    @HttpCode(200)
    @Delete(":id")
    @UseGuards(AuthGuard)
    async deleteUser(@Param("id") id : string){
      try{
        return await  this.userService.deleteUser(id);
      }catch(error){
        if(error instanceof NotFoundException){
          const status = error.getStatus();
          return {
            statusCode: status ,
            message: error.message
          }
        }else {
          throw new HttpException( "Error inesperado", HttpStatus.CONFLICT)
        }
      }
     
    }
  
    @ApiBearerAuth()
    @HttpCode(200)
    @Get(":id")
    @UseGuards(AuthGuard)
    async getUserbyId(@Param("id") id : string){
  
  try{
    return await this.userService.getUserbyId(id);
  }catch(error){
    if(error instanceof NotFoundException){
      const status = error.getStatus();
          return {
            statusCode: status ,
            message: error.message
          }
    }else {
      throw new HttpException( "Error inesperado", HttpStatus.CONFLICT)
    }
  }}
        
}
