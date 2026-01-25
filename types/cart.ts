import { Product } from "@/types/products";

export interface CartItem {
  product: Product;
  amount: number;
}
