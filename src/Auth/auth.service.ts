import { Injectable } from "@nestjs/common";
import { RespositoryAuth } from "./RepositoryAuth";
import { CredentialDto} from "../DTO´S/LoginDto";
import { CreateUserDto } from "../DTO´S/UserDto";




@Injectable()
export class AuthService {
    constructor (private readonly repositoryAuth: RespositoryAuth){}

    SingUp(Register:CreateUserDto ){
     return this.repositoryAuth.getRegister(Register)
    }

    SingIn(Login : CredentialDto) {
    return this.repositoryAuth.getLogin(Login);
    }
    
};

