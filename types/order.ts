import product, { products } from "./products";

export interface Order {
   id:string;
   date: Date;
   status: "processing" | "shipped" | "delivered" | "cancelled";
   payment:string;
   total:number;
   customer:{
      name:string;
      email:string;
      phone:string;
      address:string;
   };
   items:product[]
}

export const orders:Order[] = [
  
]



export default Order;
