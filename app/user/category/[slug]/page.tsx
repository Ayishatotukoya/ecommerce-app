import { categories } from "@/types/Categories";
import CategoryProduct from "./componenet/page";

type Props = {
  params: {
    slug: string;
  };
};

export default function CategoryDetailsPage({ params }: Props) {
  // find category
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">Category not found</div>
    );
  }

  // filter products
  
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Category header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{category.title}</h1>

        <p className="text-gray-500">{category.description}</p>
      </div>

      {/* Products */}
      <CategoryProduct category={category}/>
      
    </section>
  );
}
