import { UsersRepository } from "src/Users/User.Repository";
import { LoginUserDto } from "./LoginDto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/Entities/Users/Users.entity";
import { Repository } from "typeorm";


@Injectable()
export class RespositoryAuth {
constructor( @InjectRepository(User)  private readonly repositorioUser:Repository<User>){}

async getLogin(Login : LoginUserDto) : Promise<string> {

const user = await this.repositorioUser.findOne({where:{email: Login.email}});
if(!user){
    throw new HttpException("usuario inexistente" , HttpStatus.NOT_FOUND);
}
if(user && Login.password === user.password){
return `Ingreso exitoso`;
}
if(!Login.email && !Login.password){
    throw new HttpException("faltan datos" , HttpStatus.BAD_REQUEST)
}

throw new HttpException(`Usuario y/o contraseña incorrecta/s`, HttpStatus.UNAUTHORIZED);

}
}
       




    
        

