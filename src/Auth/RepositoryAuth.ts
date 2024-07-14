import { UsersRepository } from "src/Users/User.Repository";
import { UserDto } from "./LoginDto";
import { Injectable } from "@nestjs/common";


@Injectable()
export class RespositoryAuth {
    constructor(private readonly repositorioUser : UsersRepository){}

    async getLogin(Login : UserDto) : Promise<string> {
        if(!Login.email && !Login.password){
            return "faltan datos";
        }
        const user = await this.repositorioUser.userByEmail(Login.email);
        if(!user){
            return "usuario inexistente"
        }
        if(user && user.password === Login.password){
           return `Acceso exitoso`
        } else {
            return `Usuario y/o contraseña incorrecta/s`
        }
    }

}