import { UserService } from "../Users/user.service";
import { User } from "./interface.user";
import { userDto } from "./UserDto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(page?: number, limit?: number): Promise<import("./interface.user").User2[]>;
    getPostUsers(us: User): Promise<string>;
    getPutUsers(id: string, userdto: userDto): Promise<string>;
    deleteUser(id: string): Promise<string>;
    getUserbyId(id: string): Promise<string | {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: number;
        country: string;
        city: string;
    }>;
}
