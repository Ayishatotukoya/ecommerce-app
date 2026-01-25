'use client';
import CartCard from "@/components/cart/cartCard";
import {useCartStore} from "@/lib/store/cart_store";


export default function Cart() {
  const {cartItems, setCartItems} =  useCartStore();
  
  return (
    <main className="section">
      <div className="border-b px-6 py-3">
        <h2> Cart </h2>
      </div>

      <div className="card flex flex-col justify-between ">
       { cartItems.map((cartItem, index) => (
          <CartCard key={index} cartItem={cartItem} />
        ))}
      </div>
    </main>
  );
}
