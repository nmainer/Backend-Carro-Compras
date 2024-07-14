import { UsersRepository } from "./User.Repository";
import { User } from "./interface.user";
import { userDto } from "./UserDto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    getUsers(page: number, limit: number): Promise<import("./interface.user").User2[]>;
    getUserbyId(id: number): Promise<string | {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: number;
        country: string;
        city: string;
    }>;
    getNewUser(us: User): Promise<string>;
    getPutUsers(id: number, user: userDto): Promise<string>;
    deleteUser(id: number): Promise<string>;
}
