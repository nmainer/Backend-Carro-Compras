import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./User.Repository";



@Injectable()
export class UserService{
    constructor(private readonly userRepository : UsersRepository){}
     
    
     getUsers() {
     return this.userRepository.getRepository();
    }
}
 

