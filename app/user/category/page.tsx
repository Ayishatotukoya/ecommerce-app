// import ProductCard from "@/components/product/ProductCard";
// import { audiences } from "@/types/Audience";
// import { categories } from "@/types/Categories";
// import { products } from "@/types/products";
// import { promises } from "dns";


// type PageProps = {
//   params: {
//     audience: string;
//     category: string;
//   };
// };

// export default function CategoryPage({ params }:params: promises<id:string>) {
//   const { audience, category } = params;

//   // 1️⃣ Find audience by slug
//   const audienceObj = audiences.find((a) => a.slug === audience);

//   // 2️⃣ Find category by slug
//   const categoryObj = categories.find((c) => c.slug === category);

//   if (!audienceObj || !categoryObj) {
//     return <div className="p-10">Category not found</div>;
//   }

//   // 3️⃣ Filter products
//   const filteredProducts = products.filter(
//     (p) => p.audiences_id === audienceObj.id && p.category_id === categoryObj.id,
//   );

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-6 capitalize">
//         {audienceObj.title} {categoryObj.title}
//       </h1>

//       {filteredProducts.length === 0 && (
//         <p>No products found in this category.</p>
//       )}

//       <div
//         className="
//           grid 
//           grid-cols-2 
//           sm:grid-cols-3 
//           md:grid-cols-4 
//           lg:grid-cols-5 
//           gap-6
//         "
//       >
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} {...product} />
//         ))}
//       </div>
//     </section>
//   );
// }
