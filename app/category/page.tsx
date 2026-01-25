'use client'
import CategoryCard from "@/components/category/categoryCard";
import CategorySection from "@/components/category/categoryList";
import Banner from "@/components/homepage/banner";



export default function ProductPage(){

return(
   <main className="section space-y-12">
   
           <Banner
             heading="Where style meets comfort"
             paragraph="Discover premium fashion for men, women, and kids — curated just for you."
           />
      <CategorySection title="Browse by category" />
      </main>
)
}