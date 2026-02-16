'use client'
import { useCartStore } from "@/lib/store/cart_store";
import { CartItem } from "@/types/cart";
import Product from "@/types/products";

type Props = {
  product: Product;
  size?: string | null;
  color?: string | null;
  qty?: number;
};
export default function AddToCartButton({ product, size, color, qty = 1,}: Props) {

  const { cartItems, setCartItems } = useCartStore();

  //find same product + variant
const existingIndex = cartItems.findIndex(
   (item:CartItem) => 
      item.product.id === product.id &&
   item.size === size &&
   item.color ===color
);
 const productExistsInCart = existingIndex !== -1;

// add items to cart 
  function addItemToCart() {
    let currentCart = [...cartItems];

    if (productExistsInCart) {
      currentCart[existingIndex] = {
         ...currentCart[existingIndex],
         amount: currentCart[existingIndex].amount + qty
      };
   }
      else{
         const newCartItem: CartItem ={
            product, 
            amount:qty,
            size: size || undefined,
            color : color || undefined
         }
         currentCart.push(newCartItem)
      }

      setCartItems(currentCart);
  }

  function removeItemsFromCart() {
    if(!productExistsInCart) return;

    let currentCart = [...cartItems];
    const item = currentCart[existingIndex];

    if(item.amount <= 1 ){
      currentCart.splice(existingIndex, 1)
    } 
    else {
      currentCart[existingIndex] = {
         ...item,
         amount:item.amount-1
      }
    };

      setCartItems(currentCart);
   }

function getAmount(){
   if(!productExistsInCart) return 0;
   return cartItems[existingIndex].amount;
}


  return (
    <div>
      {/* Quantity + Cart */}
      {productExistsInCart ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded">
            <button className="px-3 py-1" onClick={removeItemsFromCart}>
              -
            </button>
            <span className="px-3">{getAmount()}</span>
            <button className="px-3 py-1" onClick={addItemToCart}>
              +
            </button>
          </div>
        </div>
      ) : (
        <button
          className="btn-primary px-6 py-2 text-sm"
          onClick={addItemToCart}
          disabled={!size || !color}
        >
          {!size || !color ? "Select size & color" : "Add to cart"}
        </button>
      )}
    </div>
  );
}