import { UserService } from "../Users/user.service";
import { CreateUserDto } from "../DTO´S/UserDto";
import { Request } from "express";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(page?: number, limit?: number): Promise<import("./interfaces.user").User2[]>;
    userByAuth(req: Request): string;
    getUserByEmail(email: string): Promise<import("../Entities/Users/Users.entity").User>;
    getPostUsers(us: CreateUserDto): Promise<Partial<import("../Entities/Users/Users.entity").User>>;
    getPutUsers(id: string, userdto: CreateUserDto): Promise<string>;
    deleteUser(id: string): Promise<string>;
    getUserbyId(id: string): Promise<object | Omit<import("./interfaces.user").User2, "admin">>;
}
