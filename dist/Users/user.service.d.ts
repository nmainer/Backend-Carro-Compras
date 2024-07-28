import { UsersRepository } from "./User.Repository";
import { CreateUserDto } from "../DTO´S/UserDto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    getUsers(page: number, limit: number): Promise<import("./interface.user").User2[]>;
    getUserbyId(id: string): Promise<string | import("./interface.user").User2>;
    getNewUser(us: CreateUserDto): Promise<Partial<string | import("./interface.user").User2>>;
    getPutUsers(id: string, user: CreateUserDto): Promise<string>;
    deleteUser(id: string): Promise<string>;
}
