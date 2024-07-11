import { UsersRepository } from "./User.Repository";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    getUsers(): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }[]>;
}
