import { RespositoryAuth } from "./RepositoryAuth";
import { User3 } from "src/Users/interface.user";
export declare class AuthService {
    private readonly repositoryAuth;
    constructor(repositoryAuth: RespositoryAuth);
    getLogin(Login: User3): Promise<string>;
}
