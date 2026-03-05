import { useProductStore } from "@/lib/store/product_store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductsTable() {

  const[productToDelete, setProductToDelete] = useState<string | null>(null);
  const{productItems, deleteProduct} =useProductStore();
 

  return (
    <main className="bg-white border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-semibold text-lg">Products</h2>

        <Link
          href="/admin/products/create"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Add Product
        </Link>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="text-left text-sm">
            <th className="p-4">Product</th>
            <th className="p-4">title</th>
            <th className="p-4">Price</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Status</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {productItems.map((product) => (
            <tr className="border-t" key={product.id}>
              <td className="p-4 flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src={product.product_images[0]}
                    alt="product"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <span>{product.id}</span>
              </td>

              <td className="p-4">{product.title}</td>

              <td className="p-4">₦{product.price}</td>

              <td className="p-4">{product.stock}</td>

              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  Active
                </span>
              </td>

              <td className="p-4 flex gap-2">
                <Link
                  href={`/admin/products/${product.id}`}
                  className="border px-3 py-1 rounded"
                >
                  Edit
                </Link>

                <button
                  className="border px-3 py-1 rounded text-red-500"
                  onClick={() => setProductToDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* delete modal */}
      {productToDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-2">Delete Product</h3>
            <p>Are you sure you want to delete this product?</p>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              className="border px-4 py-2 rounded"
              onClick={() => setProductToDelete(null)}
            >
              Cancel
            </button>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => {
                deleteProduct(productToDelete);
                setProductToDelete(null);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

