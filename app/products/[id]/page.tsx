import { products } from "@/types/products";
import ProductClient from "./productClient";


export default async function ProductDetails({
   params,
 }: {
   params: Promise<{ id: string }>;
 }) {
   const { id } = await params;
   const product = products.find((p) => p.id === id);
  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  // pass product to client
  return <ProductClient product={product} />;
}
