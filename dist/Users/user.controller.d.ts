import { UserService } from "../Users/user.service";
import { CreateUserDto } from "../DTO´S/UserDto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(page?: number, limit?: number): Promise<import("./interfaces.user").User2[]>;
    getUserByEmail(email: string): Promise<import("../Entities/Users/Users.entity").User>;
    getPostUsers(us: CreateUserDto): Promise<string>;
    getPutUsers(id: string, userdto: CreateUserDto): Promise<string>;
    deleteUser(id: string): Promise<string>;
    getUserbyId(id: string): Promise<string | import("./interfaces.user").User2>;
}
