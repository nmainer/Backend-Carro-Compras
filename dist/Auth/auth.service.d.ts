import { RespositoryAuth } from "./RepositoryAuth";
import { LoginUserDto } from "./LoginDto";
export declare class AuthService {
    private readonly repositoryAuth;
    constructor(repositoryAuth: RespositoryAuth);
    getLogin(Login: LoginUserDto): Promise<string>;
}
