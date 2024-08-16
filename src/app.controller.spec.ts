import { Test, TestingModule } from '@nestjs/testing';
import { UsersRepository } from './Users/User.Repository';
import { JwtService } from '@nestjs/jwt';
import { User } from './Entities/Users/Users.entity';
import { CreateUserDto } from './DTO´S/UserDto';
import { RespositoryAuth } from './Auth/RepositoryAuth';
import { CategoryService } from './Categories/categorie.service';

describe('Test UserServices', () => {
  let repositoryAuth : RespositoryAuth


  const mockUser: CreateUserDto={
    name:"nicolas",
    email:"mainermnicolas@gmail.com",
    password:"123456",
    confirmPassword:"123456",
    address:"Saavedra 4353",
    phone:4524879,
    country:"Argentina",
    city:"Cap Fed"
  }



  const mockUserRepository : Partial<UsersRepository> ={
    getUserByEmail:()=> Promise.resolve(undefined),
    getNewUser:(us:CreateUserDto) : Promise<Partial<User>>=> Promise.resolve(
      {...us
      })
  };



  beforeEach(async () => {

    const app: TestingModule = await Test.createTestingModule({
      providers : [RespositoryAuth,JwtService,
      {provide: UsersRepository , useValue :mockUserRepository}
    ]  
    }).compile();

    repositoryAuth= app.get<RespositoryAuth>(RespositoryAuth);

   
   
  });

  it("Authrepository must be defined", async()=>{
    expect (repositoryAuth).toBeDefined()
  })

  it("getNewUser return a new user with password hashed", async()=>{
const user = await repositoryAuth.getRegister(mockUser);

expect(mockUser.password).not.toEqual(user.password)
})

})


