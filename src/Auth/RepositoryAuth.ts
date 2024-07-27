import { UsersRepository } from "src/Users/User.Repository";
import { UserDto } from "./LoginDto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/Entities/Users/Users.entity";
import { Repository } from "typeorm";


@Injectable()
export class RespositoryAuth {
constructor( @InjectRepository(User)  private readonly repositorioUser:Repository<User>){}

async getLogin(Login : UserDto) : Promise<string> {

const user = await this.repositorioUser.findOne({where:{email: Login.email}});
if(!user){
    return "usuario inexistente";
}
if(user && Login.password === user.password){
return `Ingreso exitoso`;
}
if(!Login.email && !Login.password){
    return "faltan datos";
}
return `Usuario y/o contraseña incorrecta/s`
}
}
       




    
        

