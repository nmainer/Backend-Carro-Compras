import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./User.Repository";
import { User } from "./interface.user";
import { userDto } from "./UserDto";



@Injectable()
export class UserService{
  
    constructor(private readonly userRepository : UsersRepository){}
     
    
     getUsers(page:number,limit:number) {
     return this.userRepository.getRepository(page,limit);
    }

    getUserbyId(id: number) {
        return this.userRepository.getUserId(id)
    }

    getNewUser(us : User){
       return this.userRepository.getNewUser(us)
    }
    getPutUsers(id:number , user : userDto) {
        return this.userRepository.getPutUser(id,user)
    }
    deleteUser(id:number) {
       return this.userRepository.deleteUser(id);
      }
}
 

