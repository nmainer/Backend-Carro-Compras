import { UsersRepository } from "./User.Repository";
import { CreateUserDto } from "../DTO´S/UserDto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    getUsers(page: number, limit: number): Promise<import("./interfaces.user").User2[]>;
    getUserbyId(id: string): Promise<object | Omit<import("./interfaces.user").User2, "admin">>;
    getNewUser(us: CreateUserDto): Promise<Partial<import("../Entities/Users/Users.entity").User>>;
    getByEmail(email: string): Promise<import("../Entities/Users/Users.entity").User>;
    getPutUsers(id: string, user: Partial<CreateUserDto>): Promise<string>;
    deleteUser(id: string): Promise<string>;
}
