import { Product } from "@/types/products";

export type CartItem = {
  product: Product;
  amount: number;
  size?: string;
  color?: string;
};

