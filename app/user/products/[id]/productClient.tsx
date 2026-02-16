"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { reviews } from "@/types/Rating";
import Product from "@/types/products";
import StarRating from "@/components/reviews/starRating";
import AddToCartButton from "./component/addToCartButton";

export default function ProductClient({ product }: { product: Product }) {
  const oldPrice = product.price + 4500;
  const [activeImage, setActiveImage] = useState(product.product_images[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const productReviews = reviews.filter((r) => r.product_id === product.id);

  const avgRating =
    productReviews.reduce((sum, r) => sum + r.rating, 0) /
    (productReviews.length || 1);

  return (
    <div className="section">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> / <Link href="/user/products">Products</Link> /{" "}
        <span className="text-gray-800">{product.title}</span>
      </div>

      {/* MAIN CARD */}
      <div className="bg-white rounded-xl shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div>
          {/* image */}
          <div className="relative w-full h-[420px] border rounded overflow-hidden">
            <Image
              src={activeImage}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-3 mt-4">
            {product.product_images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`relative w-20 h-20 border rounded overflow-hidden
                ${activeImage === img ? "ring-2 ring-black" : ""}`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          {/* title */}
          <h1 className="text-2xl md:text-3xl  font-semibold">{product.title}</h1>

          {/* rating */}
          <div className="flex items-center gap-3">
            <StarRating rating={avgRating} />
            <span className="text-sm text-gray-500">
              ({productReviews.length} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-800">
              ₦{product.price.toLocaleString()}
            </span>
            <span className="text-xs line-through text-gray-400">
              ₦{oldPrice.toLocaleString()}
            </span>
          </div>
          {/* description */}
          <p className="text-gray-600">{product.description}</p>

          {/* Sizes */}
          <div>
            <p className="font-medium mb-2">Size</p>
            <div className="flex gap-3 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded transition
                  ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <p className="font-medium mb-2">Color</p>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border
                  ${
                    selectedColor === color ? "ring-2 ring-black scale-110" : ""
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          {/* CART */}
          <AddToCartButton
            product={product}
            size={selectedSize}
            color={selectedColor}
          />
        </div>
      </div>

      <div className="mt-10 bg-white shadow rounded p-6">
        <h3 className="font-semibold text-lg border-b pb-2">Product Details</h3>
        <p className="mt-4 text-gray-600">{product.description}</p>
      </div>

      {/* REVIEWS */}
      <div className="mt-10 bg-white shadow rounded p-6">
        <h3 className="font-semibold text-lg mb-4">
          Customer Reviews ({productReviews.length})
        </h3>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl font-bold">{avgRating.toFixed(1)}</span>
          <div>
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i}>{i <= avgRating ? "⭐" : "☆"}</span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {productReviews.map((r) => (
            <div key={r.id} className="border-b pb-4">
              <div className="flex justify-between">
                <p className="font-medium">{r.user_id}</p>
                <span className="text-sm text-gray-400">date</span>
              </div>

              <div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>{i <= r.rating ? "⭐" : "☆"}</span>
                ))}
              </div>

              <p className="text-gray-600 mt-1">{r.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SHIPPING + SELLER */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded p-6">
          <h4 className="font-semibold mb-2">Delivery & Returns</h4>
          <ul className="text-gray-600 space-y-2">
            <li>🚚 Delivery in 2–4 days</li>
            <li>📦 Free returns in 7 days</li>
            <li>💳 Pay on delivery</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded p-6">
          <h4 className="font-semibold mb-2">Seller Info</h4>
          <p className="text-gray-700">Stylespectrum store</p>
          <p className="text-sm text-gray-500">⭐ 98% positive rating</p>
        </div>
      </div>
    </div>
  );
}
