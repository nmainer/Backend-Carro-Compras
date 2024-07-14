import { User, User2, User3 } from "./interface.user";
import { userDto } from "./UserDto";
export declare class UsersRepository {
    constructor();
    private user;
    getRepository(page: number, limit: number): Promise<User2[]>;
    getUserId(id: number): Promise<string | {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: number;
        country: string;
        city: string;
    }>;
    getNewUser(us: User): Promise<string>;
    getPutUser(id: number, userdto: userDto): Promise<string>;
    deleteUser(id: number): Promise<string>;
    userByEmail(email: string): Promise<User3>;
}
