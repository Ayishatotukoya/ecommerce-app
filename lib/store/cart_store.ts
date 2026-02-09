import { CartItem } from '../../types/cart';
import {create} from "zustand";



export interface CartStore{
   cartItems:CartItem[];

   //set cart CartItem
   setCartItems: (cartItems: CartItem[]) => (void);
   
}

export const useCartStore = create<CartStore>((set) => ({
   cartItems: [],

   setCartItems: (items: CartItem[]) => set({cartItems: items})
}))