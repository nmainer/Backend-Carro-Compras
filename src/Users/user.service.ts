import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./User.Repository";
import { userDto } from "./UserDto";



@Injectable()
export class UserService{
  
    constructor(private readonly userRepository : UsersRepository){}
     
    
     getUsers(page:number,limit:number) {
     return this.userRepository.getRepository(page,limit);
    }

    getUserbyId(id: string) {
        return this.userRepository.getUserId(id)
    }

    getNewUser(us : userDto){
       return this.userRepository.getNewUser(us)
    }
    getPutUsers(id:string, user : userDto) {
        return this.userRepository.getPutUser(id,user)
    }
    deleteUser(id:string) {
       return this.userRepository.deleteUser(id);
      }
}
 

