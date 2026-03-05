import ProductCard from "@/components/product/ProductCard";
import { useProductStore } from "@/lib/store/product_store";
import { Category } from "@/types/Categories";

export default function CategoryProduct ({category}:{category:Category}) {

   const { productItems } = useProductStore();

   const categoryProducts = productItems.filter(
    (productItems) => productItems.category_id === category.id,
  );


 if(categoryProducts.length === 0) {
    <p>No products found in this category.</p>
 }

   return (
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
       {categoryProducts.map((product) => (
         <ProductCard key={product.id} {...product} />
       ))}
     </div> 
   );
}