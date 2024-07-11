import { Injectable } from "@nestjs/common";



@Injectable()
export class UsersRepository{
  constructor(){}
  private user = [
{
id:1,
email: "mail@mail.com",
name: "nicolas",
password: "1234",
address: "Espora 308",
phone: "455889",
country: "Argentina",
city: "Santa Fe"
},

{
   id:2,
   email: "mail@mail.com",
   name: "maria",
   password: "1234",
   address: "Avellaneda 113",
   phone: "45587",
   country: "Argentina",
   city: "Cap Fed"
}

];

  async getRepository(){
    
  return this.user;
}

}

