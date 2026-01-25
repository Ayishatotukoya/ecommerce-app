export interface Audiences {
  id: string;
  title: string;
  slug: string;
  description: string;
}

const Audiences: Audiences[] = [
  {
      id: "1",
      title: "Women",
      slug: "women",
      description: "Fashionable clothing and accessories for women",
   },

   {
      id: "2",
      title: "Men",
      slug: "men",
      description: "Stylish apparel and accessories for men",
   },

   {
      id: "3",
      title: "Children",
      slug: "children",
      description: "Trendy and comfortable clothing   for children",
   },
];
export default Audiences;