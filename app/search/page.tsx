"use client";

import { useState } from "react";
import { products } from "@/types/products";
import ProductCard from "@/components/product/ProductCard";


export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Search Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border px-4 py-2 rounded mb-6"
      />

      {query && (
        <p className="text-sm text-gray-500 mb-4">
          Found {filteredProducts.length} result(s)
        </p>
      )}

      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-6
        "
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
