import { UsersRepository } from "../Users/User.Repository";
import { CredentialDto} from "../DTO´S/LoginDto";
import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "../DTO´S/UserDto";
import { JwtService } from "@nestjs/jwt";





@Injectable()
export class RespositoryAuth {
constructor( private readonly  userService: UsersRepository ,
    private readonly jwtService: JwtService
){}

async getLogin(Login : CredentialDto){

const user = await this.userService.getUserByEmail(Login.email);
if(!user){
    throw new BadRequestException("Usuario no registrado");
}

const hashPassword = await bcrypt.compare(Login.password, user.password);

if(!hashPassword){
    throw new BadRequestException(`Usuario y/o contraseña incorrecta/s`);;
}

if(!Login.email && !Login.password){
    throw new BadRequestException("faltan datos")
}

const userPayLoad = {
    subscribe: user.id,
    id: user.id,
    email:user.email,
    admin:user.admin  
}

const token = this.jwtService.sign(userPayLoad);

return {success: "Registro exitoso" , token};
}



async getRegister(Register: CreateUserDto){

if(Register.password !== Register.confirmPassword){
    return "Las contraseñas deben coincidir"
}


const user= await this.userService.getUserByEmail(Register.email);


if(user){
 throw new HttpException("el email actual ya se encuentra registrado" , HttpStatus.BAD_REQUEST);
}


const passwordHashed = await bcrypt.hash(Register.password ,10);
if(!passwordHashed){
    throw new BadRequestException ("password could not hashed");
}
const userNew = {...Register,password:passwordHashed}


return this.userService.getNewUser(userNew);
}

}

       




    
        

