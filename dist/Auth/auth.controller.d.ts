import { AuthService } from "./auth.service";
import { CredentialDto } from "../DTO´S/LoginDto";
import { CreateUserDto } from "../DTO´S/UserDto";
export declare class AuthController {
    private readonly authservice;
    constructor(authservice: AuthService);
    singIn(Login: CredentialDto): Promise<{
        success: string;
        token: string;
    }>;
    singUp(Register: CreateUserDto): Promise<Partial<import("../Entities/Users/Users.entity").User>>;
}
