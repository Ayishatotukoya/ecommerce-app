import { categories } from "@/types/Categories";
import Image from "next/image";
import Link from "next/link";

export default async function categoryDetails({params}: {params: Promise<{id: string}>}) {

  const {id} = await params;

  const category = categories.find((c) => c.id === id);

  if(!category) {
    //show 404 page
    return <div>Not found</div>
  }

  return (
      <div
        key={category.id}
        className="group overflow-hidden flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm"
      >
        {/* Image */}
        <Link href={`/category/${category.id}`}>
          <div className="relative w-full md:w-1/2 h-[320px] bg-gray-100 overflow-hidden rounded-lg cursor-pointer">
            <Image
              src={category.category_image[0]}
              alt={category.title}
              width={48}
              height={48}
              className="object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold">{category.title}</h3>

          <p className="text-gray-500 text-sm">{category.slug}</p>

          <p className="text-indigo-600 font-bold text-xl">{category.audience_id}</p>

          <p className="text-gray-600 text-sm">{category.description}</p>
        </div>
      </div>
  );
}
