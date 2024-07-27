import { Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { Product } from "../Products/products.entity";
import { Order } from "../Orders/Orders.entity";



@Entity({name: "orderDetails"})
export class OrderDetail {

    @PrimaryGeneratedColumn("uuid")
    id:string = uuid()

    @Column({type: "int", nullable: false})
    price: number

    @ManyToMany(()=>Product , product =>product.orderdetail)
    @JoinTable()
    products: Product[]

    @OneToOne(()=> Order , order =>order.orderdetail)
    order : Order
}