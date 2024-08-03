import { UsersRepository } from "src/Users/User.Repository";
import { CredentialDto } from "../DTO´S/LoginDto";
import { CreateUserDto } from "src/DTO´S/UserDto";
import { JwtService } from "@nestjs/jwt";
export declare class RespositoryAuth {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersRepository, jwtService: JwtService);
    getLogin(Login: CredentialDto): Promise<{
        success: string;
        token: string;
    }>;
    getRegister(Register: CreateUserDto): Promise<string>;
}
