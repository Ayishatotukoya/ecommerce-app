import { CartItem } from '../../types/cart';
import {create} from "zustand";



export interface CartStore{
   cartItems:CartItem[];

   //set cart CartItem
   setCartItems: (cartItems: CartItem[]) => (void);
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [
    {
      amount: 1,
      product: {
        id: "1",
        title: "bag",
        slug: "bag",
        price: 20,
        category_id: " 1",
        description: "comfortable bags ",
        product_images: [
          "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
        ],
        sizes: ["xl"],
        colors: ["brown"],
      },
    },
  ],

  setCartItems: (items: CartItem[]) => set({ cartItems: items }),
}));