"use client";

import Category from "@/types/Categories";

//  id: string;
//  title: string;
//  slug: string;
//  description: string;
//  category_image: string;

export default function CategoryForm({category} : {category?: Category | null}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Category Information</h2>

      <div className="space-y-4">
        <input
          value={category?.title ?? ""}
          placeholder="Enter title"
          className="w-full border rounded-lg px-3 py-2"
        />
        <input
          value={category?.slug ?? ""}
          placeholder="Enter slug"
          className="w-full border rounded-lg px-3 py-2"
        />

        <textarea
          value={category?.description ?? ""}
          placeholder=" Enter Description"
          className="w-full border rounded-lg px-3 py-2"
        />

        <input
          type="text"
          value={category?.category_image ?? ""}
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Enter image url"
        />

        <button className="bg-black text-white px-6 py-2 rounded-lg">
          Save Category
        </button>
      </div>
    </div>
  );
}
