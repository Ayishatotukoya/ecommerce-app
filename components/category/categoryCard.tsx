"use client";

import Category from "@/types/Categories";
import Image from "next/image";
import Link from "next/link";


type Props = {
  category: Category;
};

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/user/category/${category.slug}`}
      className="group relative rounded-xl overflow-hidden cursor-pointer"
    >
      {/* image */}
      <div className="relative w-full h-44">
        <Image
          src={category.category_image}
          alt={category.title}
          fill
          sizes="(max-width:768px) 50vw, 20vw"
          className="object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">{category.title}</h3>
      </div>
    </Link>
  );
}
