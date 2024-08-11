import { RespositoryAuth } from "./RepositoryAuth";
import { CredentialDto } from "../DTO´S/LoginDto";
import { CreateUserDto } from "../DTO´S/UserDto";
export declare class AuthService {
    private readonly repositoryAuth;
    constructor(repositoryAuth: RespositoryAuth);
    SingUp(Register: CreateUserDto): Promise<string>;
    SingIn(Login: CredentialDto): Promise<{
        success: string;
        token: string;
    }>;
}
