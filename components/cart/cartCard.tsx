import { CartItem } from "@/types/cart";
import { Trash } from "lucide-react";
import Image from "next/image";


export default function CartCard({cartItem} : {cartItem: CartItem}){
   const oldPrice = cartItem.product.price + 4500;
  const discount = Math.round(((oldPrice - cartItem.product.price) / oldPrice) * 100);

   return (
     <main key={cartItem.product.id}>
       {/* left side  */}
       <div className="flex ">
         <div className=" w-full h-[200px]  overflow-hidden rounded-lg cursor-pointer flex gap-4">
           <Image
             src={cartItem.product.product_images[0]}
             alt={cartItem.product.title}
             width={200}
             height={100}
             className="object-cover group-hover:scale-105 transition duration-300"
           />
           <div className="space-y-2">
             <h3 className="text-gray-600 leading-relaxed">
               {cartItem.product.description}
             </h3>
             <p className="text-3xl font-semibold">{cartItem.product.title}</p>
             <span className="text-gray-500">{cartItem.product.slug}</span>
             <p>few units left</p>
           </div>
         </div>

         {/* right */}

         <div className="mt-6 px-4">
           <div className="flex items-center gap-2">
             <span className="text-lg font-bold text-orange-600">
               ₦{cartItem.product.price.toLocaleString()}
             </span>
           </div>
           <span className="text-xs line-through text-gray-400">
             ₦{oldPrice.toLocaleString()}
           </span>
           <span className=" text-gray-400 text-xs px-2 py-1 rounded bg-orange-300">
             -{discount}%
           </span>
         </div>
       </div>
       <div className=" items-center gap-5 py-3 px-6 flex justify-between ">
         <button className="flex gap-2">
           <Trash className="text-orange-700" />
           Remove
         </button>

         <div className="flex items-center border rounded">
           <button className="px-3 py-1">-</button>
           <span className="px-4">1</span>
           <button className="px-3 py-1">+</button>
         </div>
       </div>
     </main>
   );

}