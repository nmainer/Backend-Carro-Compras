import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { RespositoryAuth } from "./RepositoryAuth";
import { UsersRepository } from "src/Users/User.Repository";

@Module({
    imports:[],
    controllers: [AuthController],
    providers:[AuthService , RespositoryAuth , UsersRepository ]
})

export class AuthModule{};

