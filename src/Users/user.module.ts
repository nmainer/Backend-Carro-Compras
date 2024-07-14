import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UsersRepository } from "src/Users/User.Repository";
import { AuthGuard } from "src/Auth/Auth.guard";





@Module({
    imports:[],
    providers:[UserService,UsersRepository ,AuthGuard],
    controllers:[UserController]
})

export class UserModule{};