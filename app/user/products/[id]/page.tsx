import ProductClient from "./productClient";


export default async function ProductDetails({
   params,
 }: {
   params: Promise<{ id: string }>;
 }) {
   const { id } = await params;

  // pass product to client
  return <ProductClient id={id} />;
}
