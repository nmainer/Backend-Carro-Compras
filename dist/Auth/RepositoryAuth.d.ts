import { UsersRepository } from "src/Users/User.Repository";
import { UserDto } from "./LoginDto";
export declare class RespositoryAuth {
    private readonly repositorioUser;
    constructor(repositorioUser: UsersRepository);
    getLogin(Login: UserDto): Promise<string>;
}
