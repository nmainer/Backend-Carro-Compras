import { UserService } from "../Users/user.service";
import { userDto } from "./UserDto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(page?: number, limit?: number): Promise<import("./interface.user").User2[]>;
    getPostUsers(us: userDto): Promise<Partial<string | import("./interface.user").User2>>;
    getPutUsers(id: string, userdto: userDto): Promise<string>;
    deleteUser(id: string): Promise<string>;
    getUserbyId(id: string): Promise<string | import("./interface.user").User2>;
}
