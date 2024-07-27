import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { User } from "../Users/Users.entity";
import { OrderDetail} from "../OrderDetails/OrderDet.entity";


@Entity({name: "orders"})
export class Order {
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid()

    @Column({type: "date"})
    date: Date

    @ManyToOne(()=>User , user=>user.orders)
    @JoinColumn()
    user: User

    @OneToOne(()=> OrderDetail , orderdetail => orderdetail.order ,{cascade:true})
    @JoinColumn()
    orderdetail: OrderDetail
}