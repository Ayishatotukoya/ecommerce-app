import Product, { products } from "@/types/products";
import { create } from "zustand";

export interface ProductStore {
  productItems: Product[];

  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProduct: (id: string) => Product | undefined;
}

/* ---------------- NEXT ID GENERATOR ---------------- */

const getNextProductId = (items: Product[]) =>
  String(Math.max(0, ...items.map((p) => Number(p.id))) + 1);

/* ---------------- STORE ---------------- */

export const useProductStore = create<ProductStore>((set, get) => ({
  productItems: products,

  addProduct: (product) =>
    set((state) => {
      const newId = getNextProductId(state.productItems);

      return {
        productItems: [...state.productItems, { ...product, id: newId }],
      };
    }),

  updateProduct: (id, product) =>
    set((state) => ({
      productItems: state.productItems.map((item) =>
        item.id === id ? { ...item, ...product } : item,
      ),
    })),

  deleteProduct: (id) =>
    set((state) => ({
      productItems: state.productItems.filter((item) => item.id !== id),
    })),

  getProduct: (id: string) => get().productItems.find((p) => p.id === id),
}));
