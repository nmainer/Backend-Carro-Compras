import { UsersRepository } from "./User.Repository";
import { CreateUserDto } from "../DTO´S/UserDto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    getUsers(page: number, limit: number): Promise<import("./interfaces.user").User2[]>;
    getUserbyId(id: string): Promise<string | import("./interfaces.user").User2>;
    getNewUser(us: CreateUserDto): Promise<string>;
    getByEmail(email: string): Promise<import("../Entities/Users/Users.entity").User>;
    getPutUsers(id: string, user: CreateUserDto): Promise<string>;
    deleteUser(id: string): Promise<string>;
}
