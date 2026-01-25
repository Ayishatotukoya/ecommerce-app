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
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col">

      {/* Discount Badge */}
      <span className="absolute top-3 left-3 z-10  text-white text-xs px-2 py-1 rounded">
        -{discount}%
      </span>

      {/* Image */}
      <Link href={`/products/${product.id}`}> 
        <div className="relative w-full h-[220px] bg-gray-100 overflow-hidden rounded-lg cursor-pointer">
          <Image
            src={product.product_images[0]}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-gray-400">({randomRatingCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-orange-600">
            ₦{product.price.toLocaleString()}
          </span>
          <span className="text-xs line-through text-gray-400">
            ₦{oldPrice.toLocaleString()}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Button */}
        <button className="mt-auto w-full flex items-center justify-center gap-2  btn-primary  text-white text-sm py-2 rounded-lg transition">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
