import { UsersRepository } from "./User.Repository";
import { userDto } from "./UserDto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    getUsers(page: number, limit: number): Promise<import("./interface.user").User2[]>;
    getUserbyId(id: string): Promise<string | import("./interface.user").User2>;
    getNewUser(us: userDto): Promise<Partial<string | import("./interface.user").User2>>;
    getPutUsers(id: string, user: userDto): Promise<string>;
    deleteUser(id: string): Promise<string>;
}
