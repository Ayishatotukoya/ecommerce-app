import ProductForm from "@/components/admin/products/ProductForm";

export default function UpdateProduct() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>
      <ProductForm id={"id"} />
    </div>
  );
}
