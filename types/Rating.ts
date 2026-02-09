export type Review = {
  user: ReactNode;
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  review: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    product_id: "1",
    user_id: "1",
    rating: 5,
    review: "Excellent quality and fits perfectly.",
  },
  {
    id: "2",
    product_id: "1",
    user_id: "2",
    rating: 4,
    review: "Very good product, delivery was fast.",
  },
  {
    id: "3",
    product_id: "2",
    user_id: "3",
    rating: 5,
    review: "Absolutely love this! Worth every penny.",
  },
  {
    id: "4",
    product_id: "2",
    user_id: "4",
    rating: 3,
    review: "Good but the size runs a bit small.",
  },
  {
    id: "5",
    product_id: "3",
    user_id: "5",
    rating: 4,
    review: "Stylish and comfortable.",
  },
  {
    id: "6",
    product_id: "3",
    user_id: "6",
    rating: 5,
    review: "High-quality material, I’m impressed.",
  },
  {
    id: "7",
    product_id: "4",
    user_id: "7",
    rating: 2,
    review: "Not what I expected, but okay.",
  },
  {
    id: "8",
    product_id: "4",
    user_id: "8",
    rating: 4,
    review: "Looks great and feels durable.",
  },
  {
    id: "9",
    product_id: "5",
    user_id: "9",
    rating: 5,
    review: "Perfect gift, my friend loved it.",
  },
  {
    id: "10",
    product_id: "5",
    user_id: "10",
    rating: 4,
    review: "Good value for the price.",
  },
  {
    id: "11",
    product_id: "6",
    user_id: "11",
    rating: 5,
    review: "Exactly as described, very satisfied.",
  },
  {
    id: "12",
    product_id: "6",
    user_id: "12",
    rating: 3,
    review: "Average quality but wearable.",
  },
  {
    id: "13",
    product_id: "7",
    user_id: "13",
    rating: 4,
    review: "Nice design and comfortable.",
  },
  {
    id: "14",
    product_id: "7",
    user_id: "14",
    rating: 5,
    review: "One of my favorite purchases.",
  },
  {
    id: "15",
    product_id: "8",
    user_id: "15",
    rating: 4,
    review: "Looks premium and well made.",
  },
  {
    id: "16",
    product_id: "8",
    user_id: "16",
    rating: 2,
    review: "Didn’t meet my expectations.",
  },
  {
    id: "17",
    product_id: "9",
    user_id: "17",
    rating: 5,
    review: "Super comfortable, will buy again.",
  },
  {
    id: "18",
    product_id: "9",
    user_id: "18",
    rating: 4,
    review: "Nice fit and good material.",
  },
  {
    id: "19",
    product_id: "10",
    user_id: "19",
    rating: 5,
    review: "Highly recommended, amazing product.",
  },
  {
    id: "20",
    product_id: "10",
    user_id: "20",
    rating: 4,
    review: "Great overall experience.",
  },
];

export default Review