import { UsersRepository } from "../Users/User.Repository";
import { CredentialDto } from "../DTO´S/LoginDto";
import { CreateUserDto } from "../DTO´S/UserDto";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/Entities/Users/Users.entity";
export declare class RespositoryAuth {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersRepository, jwtService: JwtService);
    getLogin(Login: CredentialDto): Promise<{
        success: string;
        token: string;
    }>;
    getRegister(Register: CreateUserDto): Promise<Partial<User>>;
}
