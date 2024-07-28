import { Injectable } from "@nestjs/common";
import { RespositoryAuth } from "./RepositoryAuth";
import { LoginUserDto } from "./LoginDto";



@Injectable()
export class AuthService {
    constructor (private readonly repositoryAuth : RespositoryAuth){}

    getLogin(Login : LoginUserDto) {

        return this.repositoryAuth.getLogin(Login);
    }
};

