import { UserService } from "../Users/user.service";
import { CreateUserDto } from "../DTO´S/UserDto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(page?: number, limit?: number): Promise<import("./interface.user").User2[]>;
    getPostUsers(us: CreateUserDto): Promise<Partial<string | import("./interface.user").User2>>;
    getPutUsers(id: string, userdto: CreateUserDto): Promise<string>;
    deleteUser(id: string): Promise<string>;
    getUserbyId(id: string): Promise<string | import("./interface.user").User2>;
}
