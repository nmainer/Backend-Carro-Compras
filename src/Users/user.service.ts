import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./User.Repository";
import { CreateUserDto } from "../DTO´S/UserDto";
import { CredentialDto } from "../DTO´S/LoginDto";



@Injectable()
export class UserService{
  
    constructor(private readonly userRepository : UsersRepository){}
     
    
    async getUsers(page:number,limit:number) {
     return this.userRepository.getRepository(page,limit);
    }
    async getUserbyId(id: string) {
        return this.userRepository.getUserId(id)
    }
    async getNewUser(us : CreateUserDto){
       return this.userRepository.getNewUser(us)
    }
    async getByEmail(email:string){
        return this.userRepository.getUserByEmail(email)
    }
    async getPutUsers(id:string, user : CreateUserDto) {
        return this.userRepository.getPutUser(id,user)
    }
    async deleteUser(id:string) {
       return this.userRepository.deleteUser(id);
      }
}
 

