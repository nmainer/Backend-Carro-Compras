


interface Order{
    id:string
    date:Date
}

export interface User2 {
  id:string
  email: string
  name: string
  address: string
  phone: number
  admin: boolean
  country: string 
  city: string
  orders: Order[]
}