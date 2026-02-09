export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  category_image: string;
}

export const categories: Category[] = [
  {
    id: "1",
    title: "Clothes",
    slug: "clothes",
    description: "Fashionable clothes",
    category_image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Shoes",
    slug: "shoes",
    description: "Stylish footwear",
    category_image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Accessories",
    slug: "accessories",
    description: "Trendy accessories",
    category_image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Bags",
    slug: "bags",
    description: "Modern bags",
    category_image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  },
];
export default Category;