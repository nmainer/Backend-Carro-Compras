import { Injectable } from "@nestjs/common";
import { RespositoryAuth } from "./RepositoryAuth";
import { User3 } from "src/Users/interface.user";



@Injectable()
export class AuthService {
    constructor (private readonly repositoryAuth : RespositoryAuth){}

    getLogin(Login : User3) {

        return this.repositoryAuth.getLogin(Login);
    }
};

