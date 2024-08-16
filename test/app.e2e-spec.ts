import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let tokenAdmin;
  

beforeEach(async ()=>{
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleFixture.createNestApplication();
  await app.init();

  const req = await request(app.getHttpServer()).post("/auth/signIn").send({
    email: "mainermnicolas@gmail.com",
    password:"Nic@1990"
  })
  tokenAdmin = req.body.token;
})

it("Post / signup  return an Object and specific error message if email already exists" , async ()=>{
  const req =  await request(app.getHttpServer()).post("/auth/singUp").send({
     
     email:"mail.mail@mail.com",
     name: "Papu",
     password:"Nic@1990",
     confirmPassword:"Nic@1990",
     address:"Saavedra",
     phone:45218,
     country:"Arg",
     city:"Santa Fe"
   })
   expect(req.body).toBeInstanceOf(Object)

  const req2 = await request(app.getHttpServer()).post("/auth/singUp").send({
     email:"mail.mail@mail.com",
     name: "Papu",
     password:"Nic@1990",
     confirmPassword:"Nic@1990",
     address:"Saavedra",
     phone:45218,
     country:"Arg",
     city:"Santa Fe"
   })

   expect(req2.body.message).toBe("el email actual ya se encuentra registrado")
   
 })

 it("Auth/singin allows you to enter with a registered email and password", async()=>{

    const req = await request(app.getHttpServer()).post("/auth/signIn").send({
      email: "mainermnicolas@gmail.com",
      password:"Nic@1990"
    })
    expect (req.body.success).toBe("Registro exitoso");

    const req2 = await request(app.getHttpServer()).post("/auth/signIn").send({
      email: "mainermnicolas@gmail.com",
      password:"contraseña inexistente"
    })

    expect (req2.body.message).toBe(`Usuario y/o contraseña incorrecta/s`)

  })


  it('Get / products return an array and status ok', async () => {
    const response = await request(app.getHttpServer()).get("/products").set("Authorization", `Bearer ${tokenAdmin}`);
    
    expect (response.body).toBeDefined();
    expect (response.status).toBe(200);
    expect (response.body).toBeInstanceOf(Array)
    
  });
  
  
  it("Get/userbyid return object to ID, otherwise it will throw a message" , async()=>{

    const req = await request(app.getHttpServer()).get("/users/55e8e852-5ac7-4589-8304-f7ece2bcabae").set("Authorization", `Bearer ${tokenAdmin}`);
     expect(req.body).toBeInstanceOf(Object);
    const req2 = await request(app.getHttpServer()).get("/users/55e8e852-5ac7-4589-8304-f7ece2bcabaa").set("Authorization", `Bearer ${tokenAdmin}`);
    expect(req2.body.message).toBe("Usuario inexistente")
  })

  it("Post/orders return object to order", async()=>{
    const req = await request(app.getHttpServer()).post("/orders").set("Authorization", `Bearer ${tokenAdmin}`).send({
      userid:"55e8e852-5ac7-4589-8304-f7ece2bcabae",
      products:["67e506a2-1f72-42dc-992a-a38c8ddc39e5","426478cc-1f84-46ab-9a63-88c9c392654d","070c5bbd-c0fa-463a-b46b-d3300292df2c"]
    })

    expect(req.body).toBeInstanceOf(Object);

    
  })

});
