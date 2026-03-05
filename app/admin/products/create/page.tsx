"use client"

import ProductForm from "@/components/admin/products/ProductForm";
import { useProductStore } from "@/lib/store/product_store";
import { useRouter } from "next/navigation";

export default function CreateProductPage() {
  const router = useRouter();
  const addProduct = useProductStore((state) => state.addProduct);

  function handleCreate(data: any) {
    addProduct(data);
    router.push("/admin/products");
  }

  return (
    <div>
      <ProductForm
        currentData={{
          title: "",
          price: 0,
          slug: "",
          stock: 0,
          category_id: "",
          audiences_id: "",
          product_images: [],
          description: "",
          colors: [],
          sizes: [],
        }}
        OnSubmit={handleCreate}
      />
    </div>
  );
}
