import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { OrderDto, CreateOrderDto } from "../DTO´S/OrderDTO";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Order } from "../Entities/Orders/Orders.entity";
import { User } from "../Entities/Users/Users.entity";
import { Product } from "../Entities/Products/products.entity";
import { OrderDetail } from "../Entities/OrderDetails/OrderDet.entity";



@Injectable()
export class OrderService{
    
    constructor(@InjectRepository(Order) private repositoryOrder : Repository<Order> ,
               @InjectRepository(User) private repositoryUser : Repository<User> ,
               @InjectRepository(Product) private respositoryProduct: Repository<Product> ,
               ){}

   async addOrder(order :CreateOrderDto) : Promise<OrderDto|string>{

     const {userid , products} = order;

     

     const userById = await this.repositoryUser.findOne({where:{id:userid}} );
     
     if(!userById){
      throw new Error(`usuario inexistente`);
     }
     


      const idofProducts = products.map((products)=>products.id);
      const productsId = await this.respositoryProduct.find({where:{id: In(idofProducts)}});
      

      const productUnavailable = await productsId.filter(producto =>producto.stock <=0);
      if(productUnavailable.length > 0){

        throw new BadRequestException(`el/los producto/s : ${productUnavailable.map (producto =>producto.id).join(",")} no poseen stock`);
      }

      if(productsId.length !== products.length){

        throw new NotFoundException ( `uno o varios productos no encontrados`);
    
      }
      
      for (let i=0 ; i<productsId.length ; i=i+1){
        let producto = productsId[i];
        if(producto.stock < 1){
         return `el/los producto/s : ${producto.id} no posee suficiente stock`
        } else {
         producto.stock = producto.stock - 1;
         
         await this.respositoryProduct.save(producto);
         
        }
      }


      let valor  = 0;
     
      for (const produ of productsId) {
         
         valor = valor + produ.price;
      }

      
    const orderDetail  = new OrderDetail() 
       orderDetail.price = valor,
       orderDetail.products = productsId


     const orden = new Order()
      orden.date = new Date(),
      orden.user= userById ,
      orden.orderdetail=orderDetail

 
   await this.repositoryOrder.save(orden)

  

   return {
    id:orden.id,
    date:orden.date,
    user:{
      id:userById.id,
      name:userById.name
    },
    orderdetail:{
      id:orderDetail.id,
      price:orderDetail.price,
      products: productsId
    },
   };
   
   }

   
   async getOrder(id:string): Promise<OrderDto> {
      
      const orden = await this.repositoryOrder.findOne({where:{id}, relations:["user","orderdetail","orderdetail.products"]});

      
      return {
        id:orden.id,
        date:orden.date,
        user:{
          id:orden.user.id,
          name:orden.user.name
        },
        orderdetail:{
          id: orden.orderdetail.id,
          price:orden.orderdetail.price,
          products:orden.orderdetail.products
        },
       };;
  }

}