'use client'
import Banner from "@/components/homepage/banner";
import ProductPageCard from "@/components/product/productpagecard";


export default function ProductPage(){

return(
   <main className="section space-y-1">
   
           <Banner
             heading="Where style meets comfort"
             paragraph="Discover premium fashion for men, women, and kids — curated just for you."
           />
      {/* products */}
      <ProductPageCard/>
   </main>
)
}