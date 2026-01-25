'use client'
import { products } from "@/types/products"
import ProductCard from "./ProductCard"
import { useState } from "react";


type ProductSectionProps = {
  title: React.ReactNode;
  limit?: number;
  showToggle?: boolean;
};


export default function ProductSection({
  title,
  limit = 5,
  showToggle = true,
}: ProductSectionProps){
  
   const [showAll, setShowAll] = useState(false);

   const visible = showAll ? products : products.slice(0, limit);
   return (
     <div className="flex flex-col gap-6 justify-between items-center ">

     <div>{title}</div>

       <div
         className="
  grid 
  grid-cols-2 
  sm:grid-cols-3 
  md:grid-cols-4 
  lg:grid-cols-5 
  gap-6
"
       >
         {visible.map((products) => (
           <ProductCard key={products.id} {...products} />
         ))}
       </div>

        {showToggle && <button
         onClick={() => setShowAll(!showAll)}
         className="border py-2 px-3 rounded"
       >
         {showAll ? "Show Less" : "Show All"}
       </button> }
     </div>
   );
}