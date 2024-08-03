import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { RespositoryAuth } from "./RepositoryAuth";
import { UsersRepository } from "src/Users/User.Repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/Entities/Users/Users.entity";
import { UserService } from "src/Users/user.service";

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers: [AuthController],
    providers:[AuthService , RespositoryAuth ,UserService,UsersRepository]
})

export class AuthModule{};

