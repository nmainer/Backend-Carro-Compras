import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { Order } from "../Orders/Orders.entity";

@Entity({name: "users"})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid();

    @Column({ type: 'varchar', length: 50, nullable: false })
    name:string

    @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
    email:string

    @Column({ type: 'varchar', length: 60, nullable: false })
    password: string

    @Column({ type: 'int'})
    phone: number

    @Column({ type: 'varchar', length: 50 })
    country:string

    @Column({type: "text"})
    address: string

    @Column({ type: 'varchar', length: 50 })
    city: string

    @OneToMany(()=>Order,order => order.user)
    orders : Order[]

}