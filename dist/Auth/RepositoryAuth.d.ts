import { LoginUserDto } from "./LoginDto";
import { User } from "src/Entities/Users/Users.entity";
import { Repository } from "typeorm";
export declare class RespositoryAuth {
    private readonly repositorioUser;
    constructor(repositorioUser: Repository<User>);
    getLogin(Login: LoginUserDto): Promise<string>;
}
