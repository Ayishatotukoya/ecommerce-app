"use client";

import { ArrowRight } from "lucide-react";
import HomeProductCard from "./homeProductCard";
import { useRouter } from "next/navigation";
import { useProductStore } from "@/lib/store/product_store";

type ProductSectionProps = {
  title: React.ReactNode;
  start?: number;
  limit?: number;
  showToggle?: boolean;
};

export default function ProductSection({
  title,
  start = 1,
  limit = 8,
  showToggle = true,
}: ProductSectionProps) {
  const router = useRouter();

  const{ productItems } = useProductStore();

  const visible = productItems.slice(start, limit);

  return (
    <div className="card">
      {/* Header */}
      <div className="w-full flex justify-between items-center border px-2 sm:px-3 py-1 sm:py-2 bg-orange-700 text-white">
        <div className="text-sm sm:text-base font-semibold">{title}</div>

        {showToggle && (
          <button
            onClick={() => router.push("/products")}
            className="text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-3 flex gap-1 sm:gap-2 items-center hover:opacity-90"
          >
            Show All <ArrowRight size={16} />
          </button>
        )}
      </div>

      {/* Scroll Row */}
      <div
        className="
          flex 
          gap-3 sm:gap-4 
          overflow-x-auto 
          px-2 sm:px-3
          snap-x 
          snap-mandatory
          scrollbar-hide
        "
      >
        {visible.map((productItems) => (
          <div
            key={productItems.id}
            className="
              min-w-36 
              sm:min-w-44 
              md:min-w-48
              snap-start
            "
          >
            <HomeProductCard {...productItems} />
          </div>
        ))}
      </div>
    </div>
  );
}
