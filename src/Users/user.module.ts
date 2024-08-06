import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UsersRepository } from "src/Users/User.Repository";
import { AuthGuard } from "src/Guard/Auth.guard";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/Entities/Users/Users.entity";
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