import { User2 } from "./interfaces.user";
import { CreateUserDto } from "../DTO´S/UserDto";
import { User } from "../Entities/Users/Users.entity";
import { Repository } from "typeorm";
export declare class UsersRepository {
    private repositoryUser;
    constructor(repositoryUser: Repository<User>);
    getRepository(page: number, limit: number): Promise<User2[]>;
    getUserId(id: string): Promise<Omit<User2, "admin"> | object>;
    getNewUser(us: CreateUserDto): Promise<Partial<User>>;
    getUserByEmail(email: string): Promise<User>;
    getPutUser(id: string, userdto: Partial<CreateUserDto>): Promise<string>;
    deleteUser(id: string): Promise<string>;
}
