import { Injectable } from "@nestjs/common";
import { User, User2 , User3 } from "./interface.user";
import { userDto } from "./UserDto";



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
phone: 455889,
country: "Argentina",
city: "Santa Fe"
},

{
   id:2,
   email: "mail@mail.com",
   name: "maria",
   password: "1234",
   address: "Avellaneda 113",
   phone: 45587,
   country: "Argentina",
   city: "Cap Fed"
}
];

  async getRepository(page :number,limit:number) : Promise<User2[]>{
  const valores = this.user.map (us => ({id:us.id, email: us.email, name: us.name, address: us.address, phone: us.phone,
    country: us.country, city: us.city
    }));
    const skip = (page-1) * limit ;
     const userPage = valores.slice(skip,skip+limit);
     return userPage;
}

 async getUserId(id:number) {
  const us = await  this.user.find(elemento =>elemento.id === id )
  if(us) {
    return ({id:us.id , email: us.email , name: us.name , address : us.address , phone : us.phone , country : us.country, city: us.city})
  }
  return `id N° ${id} es inexistente`
}
async getNewUser(us: User){
  const id = this.user.length +1;
  this.user = [...this.user, {id , ...us}]
  return `id generado: ${id}`;
}
 async getPutUser(id: number, userdto: userDto) {
  const userid = await this.user.findIndex(elemento => elemento.id === id)
  if (userid !== -1){
    const users = this.user[userid];
    const userActualizer = {...users,...userdto}
    this.user[userid] = userActualizer;
    return `ususario con id N°${id} fue modificado`
    
  }
  return `id no encontrado`
}
async deleteUser(id: number) {
  const user = await this.user.findIndex(elemento => elemento.id === id)
  if(user!== -1){
   const valor = this.user[user]
   this.user.splice(user,1)
   return `el usuario con id N° ${id} fue eliminado`
  }
  return `id no encontrado`
}
async userByEmail(email:string) : Promise<User3>{
  const valor = this.user.find(elemento =>elemento.email===email);
  return valor;
}
}

