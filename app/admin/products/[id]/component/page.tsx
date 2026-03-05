"use client";

import ProductForm from "@/components/admin/products/ProductForm";
import { useProductStore } from "@/lib/store/product_store";
import { useRouter } from "next/navigation";

export default function EditProduct({ id }: { id: string }) {
  const router = useRouter();

  const product = useProductStore((state) => state.getProduct(id));

  const updateProduct = useProductStore((state) => state.updateProduct);

  if (!product) {
    return <p>Product not found</p>;
  }

  function handleUpdate(data: any) {
    updateProduct(id, data);
    router.push("/admin/products");
  }

  return <ProductForm currentData={product}
   OnSubmit={handleUpdate} />;
}
