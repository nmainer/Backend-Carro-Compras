import { User2 } from "./interface.user";
import { userDto } from "./UserDto";
import { User as Us } from "src/Entities/Users/Users.entity";
import { Repository } from "typeorm";
export declare class UsersRepository {
    private repositoryUser;
    constructor(repositoryUser: Repository<Us>);
    getRepository(page: number, limit: number): Promise<User2[]>;
    getUserId(id: string): Promise<User2 | string>;
    getNewUser(us: userDto): Promise<Partial<User2 | string>>;
    getPutUser(id: string, userdto: userDto): Promise<string>;
    deleteUser(id: string): Promise<string>;
}
