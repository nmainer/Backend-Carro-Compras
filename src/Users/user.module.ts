import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UsersService } from "./user.service";


@Module({
    imports:[],
    controllers:[UserController],
    providers:[UsersService]
})

export class UserModule{};