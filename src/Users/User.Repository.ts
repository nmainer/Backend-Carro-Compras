import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {  User2 , User3 } from "./interface.user";
import { CreateUserDto} from "../DTO´S/UserDto";
import { InjectRepository } from "@nestjs/typeorm";
import { User as Us } from "src/Entities/Users/Users.entity";
import { Repository } from "typeorm";




@Injectable()
export class UsersRepository{
   
  constructor(@InjectRepository(Us) private repositoryUser:Repository<Us> ){}
 

  async getRepository(page :number,limit:number) : Promise<User2[]>{
  const users = await this.repositoryUser.find({relations:["orders"]});
  const valorMap = users.map(us => ({id:us.id,email: us.email, name: us.name, address: us.address, phone: us.phone,
  country: us.country, city: us.city,orders:us.orders
  }));
  const skip = (page-1) * limit ;
  const userPage = valorMap.slice(skip,skip+limit);
  return userPage;
}

 async getUserId(id:string) : Promise<User2|string>{
  const us = await  this.repositoryUser.findOne({where:{id}});

  if(us){
    return {
    id: us.id,
    email: us.email,
    name: us.name,
    address: us.address,
    phone: us.phone,
    country: us.country,
    city: us.city,
    orders:us.orders
    }
  }
 throw new HttpException(`usuario inexistente`, HttpStatus.NOT_FOUND);
  
}

async getNewUser(us:CreateUserDto): Promise <Partial<User2|string>>{

  const newUser = await this.repositoryUser.save(us)
  return `id generado: ${newUser.id}`;
}

 async getPutUser(id:string, userdto: CreateUserDto) {
  const userid = await this.repositoryUser.findOne({where:{id}})
  if (userid){
    const users = {...userid,...userdto};
    await this.repositoryUser.save(users)
    
    return `ususario con id N°${users.id} fue modificado`
    
  }
  throw new HttpException(`id no encontrado`, HttpStatus.NOT_FOUND);
}

async deleteUser(id:string) {
  const user = await this.repositoryUser.findOne({where:{id}})
  if(user){
   const valor = await this.repositoryUser.remove(user)
   
   return `el registro ${valor} fue eliminado`
  }
  throw new HttpException(`id no encontrado`, HttpStatus.NOT_FOUND) 
}

}

