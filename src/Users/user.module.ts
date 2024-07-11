import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UsersRepository } from "src/Users/User.Repository";





@Module({
    imports:[],
    providers:[UserService,UsersRepository],
    controllers:[UserController]
})

export class UserModule{};