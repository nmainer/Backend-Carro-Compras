import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UsersRepository } from "../Users/User.Repository";
import { AuthGuard } from "../Guard/Auth.guard";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../Entities/Users/Users.entity";
import { requiresAuth } from "express-openid-connect";



@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers:[UserService,UsersRepository ,AuthGuard ],
    controllers:[UserController]
})

export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(requiresAuth()).forRoutes("auth/user")
    }
};