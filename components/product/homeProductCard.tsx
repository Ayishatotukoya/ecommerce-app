import Product from "@/types/products";
import Image from "next/image";
import Link from "next/link";

export default function HomeProductCard(product: Product) {
  const oldPrice = product.price + 4500;
  const discount = Math.round(((oldPrice - product.price) / oldPrice) * 100);

  return (
    <div className="group relative bg-white overflow-hidden  flex flex-col">
      {/* Discount Badge */}
      <span className="absolute top-3 right-3 z-10 bg-orange-300 text-orange-700 text-xs p-1 ">
        -{discount}%
      </span>

      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-44 bg-gray-100 overflow-hidden cursor-pointer">
          <Image
            src={product.product_images[0]}
            alt={product.title}
            fill
            className="object-cover "
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-2 flex flex-col gap-1 flex-1">

        <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>

        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-800">
            ₦{product.price.toLocaleString()}
          </span>
          <span className="text-xs line-through text-gray-400">
            ₦{oldPrice.toLocaleString()}
          </span>
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
      </div>
    </div>
  );
}
