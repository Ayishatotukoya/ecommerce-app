"use client";

import Image from "next/image";
import Link from "next/link";
import Product from "@/types/products";
import Category from "@/types/Categories";

export default function CategoryClient({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  return (
    <div className="section">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{category.title}</h1>
        <p className="text-gray-500">{category.description}</p>
      </div>

      {/* Grid */}
      {products.length === 0 ? (
        <p>No products in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="border rounded-lg overflow-hidden hover:shadow transition"
            >
              <div className="relative h-48">
                <Image
                  src={product.product_images[0]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-3 space-y-1">
                <p className="font-medium truncate">{product.title}</p>
                <p className="text-sm text-gray-500">
                  ₦{product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
