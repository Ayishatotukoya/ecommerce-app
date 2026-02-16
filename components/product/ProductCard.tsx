import Product from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";

export default function ProductCard(product: Product) {
  const oldPrice = product.price + 4500;
  const discount = Math.round(((oldPrice - product.price) / oldPrice) * 100);


  // Generate a deterministic "random" rating count based on product id
  const randomRatingCount = (typeof product.id === "number"
    ? (product.id * 31) % 45
    : product.id
        .split("")
        .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0) % 45
  ) + 1;
  

  return (
    <div className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col">
      {/* Discount Badge */}
      <span className="absolute top-3 right-3 z-10 bg-orange-300 text-orange-700 text-xs p-1">
        -{discount}%
      </span>

      {/* Image */}
      <Link href={`/user/products/${product.id}`}>
        <div className="relative w-full h-52 bg-gray-100 overflow-hidden cursor-pointer">
          <Image
            src={product.product_images[0]}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col gap-1 flex-1">
        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-800">
            ₦{product.price.toLocaleString()}
          </span>
          <span className="text-xs line-through text-gray-400">
            ₦{oldPrice.toLocaleString()}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-gray-400">({randomRatingCount})</span>
        </div>

        {/* stock */}
        <div className="">
          <span className="text-xs text-gray-400">
            {product.stock} items left
          </span>

          <div className="w-full h-2 bg-gray-200 rounded overflow-hidden mt-1">
            <div
              style={{ width: `${(product.stock / 50) * 100}%` }}
              className="h-full bg-[#f68b1e] transition-all"
            />
          </div>
        </div>

        {/* Button */}
        <button
          className="mt-2  w-full flex items-center justify-center gap-2  btn-primary  text-white text-sm py-2 rounded-xs transition"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
