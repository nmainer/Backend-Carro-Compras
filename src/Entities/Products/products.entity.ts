import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { Category } from "../Categories/categories.entity";
import { OrderDetail} from "../OrderDetails/OrderDet.entity";




@Entity({name:"products"})
export class Product {

@PrimaryGeneratedColumn("uuid")
id: string = uuid()

@Column({ type: 'varchar', length: 50, nullable: false, unique:true})
name: string 

@Column({ type: 'varchar', nullable: false })
description:string

@Column({type:"int", nullable: false})
price: number

@Column({type: "int", nullable: false})
stock: number

@Column({ type: 'varchar', default: 'default-image-url.jpg' })
imgUrl: string


@ManyToOne(()=> Category , category=>category.products )
@JoinColumn({name:"categoriesId"})
category: Category

@ManyToMany(()=>OrderDetail , orderdetail =>orderdetail.products)
orderdetail: OrderDetail[]
}