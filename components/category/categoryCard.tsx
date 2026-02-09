"use client"
import Category from "@/types/Categories"
import Image from "next/image"
import Link from "next/link";

export default function CategoryCard(category:Category){
   return (
     <Link href={`/category/${category.id}`}
       className="group relative rounded-xl overflow-hidden cursor-pointer"
       key={category.id}
     >

      {/* image */}
      
         <div className="relative w-full h-[180px]">
           <Image
             src={category.category_image}
             alt={category.title}
             fill
             className="object-cover group-hover:scale-110 transition duration-300"
           />
         </div>
       
       
       {/* content */}
       <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
         <h3 className="text-amber-100 text-xl font-bold">{category.title}</h3>
       </div>
       
     </Link>
   );
}