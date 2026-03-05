"use client"
import { categories } from "@/types/Categories";
import CategoryCard from "./categoryCard";
import { useState } from "react";

type CategorySectionProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  limit?: number;
  showToggle?: boolean;
};

export default function CategorySection({
  title,
  subtitle,
  limit = 4,
  showToggle = true,
}: CategorySectionProps) {

  const [showAll, setShowAll] = useState(false);

  const CategoryView = showAll ? categories : categories.slice(0, limit);
  return (
    <section className="flex flex-col gap-4 justify-between ">
      <div>{title}</div>
      <div>{subtitle}</div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 
  md:grid-cols-4 
  lg:grid-cols-5 
  gap-6
"
      >
        {CategoryView.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {showToggle && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="border py-2 px-3 rounded"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      )}
    </section>
  );
}