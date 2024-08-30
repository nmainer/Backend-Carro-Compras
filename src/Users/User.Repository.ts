import { Injectable, NotFoundException } from "@nestjs/common";
import { User2 } from "./interfaces.user";
import { CreateUserDto} from "../DTO´S/UserDto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../Entities/Users/Users.entity";
import { Repository } from "typeorm";
;





@Injectable()
export class UsersRepository{
   
  constructor(@InjectRepository(User) private repositoryUser:Repository<User> ){}
 

  async getRepository(page :number,limit:number) : Promise<User2[]>{
  const users = await this.repositoryUser.find({relations:["orders"]});
  const valorMap = users.map(us => ({id:us.id,email: us.email, name: us.name, address: us.address, phone: us.phone,
  admin: us.admin,country: us.country, city: us.city,orders:us.orders
  }));
  const skip = (page-1) * limit ;
  const userPage = valorMap.slice(skip,skip+limit);
  return userPage;
}

 async getUserId(id:string) : Promise<Omit<User2, "admin"> |object>{
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
  } else {
    throw new NotFoundException("Usuario inexistente");
 }
}

async getNewUser(us:CreateUserDto): Promise<Partial<User>>{

  const newUser = await this.repositoryUser.save(us)
  
  return {
    id : newUser.id,
    name:newUser.name,
    email:newUser.email,
  }
}


async getUserByEmail(email:string) {
  const userByEmail = await this.repositoryUser.findOne({where:{email}})
  return userByEmail ; 
}

 async getPutUser(id:string, userdto: Partial<CreateUserDto>) {
  const userid = await this.repositoryUser.findOne({where:{id}})
  if (userid){
    const users = {...userid,...userdto};
    await this.repositoryUser.save(users)
    
    return `usuario con id N°${users.id} fue modificado`
    
  } else {
    throw new NotFoundException("id no encontrado")
  }
  
}

async deleteUser(id:string) {
  const user = await this.repositoryUser.findOne({where:{id}})
  if(user){
   const valor = await this.repositoryUser.remove(user)
   
   return `el registro ${valor} fue eliminado`
  }
  throw new NotFoundException(`id no encontrado`);
};

}

