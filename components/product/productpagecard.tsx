"use client";

import { products } from "@/types/products";
import ProductCard from "./ProductCard";
import Pagination from "../pagination";
import { useEffect, useState } from "react";

export default function ProductPageCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerPage(8);
      else if (window.innerWidth < 1024) setItemsPerPage(12);
      else setItemsPerPage(20);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);


  const totalPages = Math.ceil(products.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedProducts = products.slice(start, end);

  return (
    <div className="max-w-7xl flex flex-col items-center justify-between gap-4 mt-4">
      <div className="w-full border px-1 sm:px-2 py-1 sm:py-2 text-center text-2xl bg-orange-700 text-white">
        <h2 className="font-bold mb-2">Product Sales Collections</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
