export interface Audience {
  id: string;
  title: string;
  slug: string;
}

export const audiences: Audience[] = [
  { id: "1", title: "Women", slug: "women" },
  { id: "2", title: "Men", slug: "men" },
  { id: "3", title: "Kids", slug: "kids" },
];
export default Audience;