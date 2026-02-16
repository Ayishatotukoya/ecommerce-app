"use client";
import { useCartStore } from "@/lib/store/cart_store";
import CartCard from "./component/cartCard";

export default function Cart() {
  const { cartItems, setCartItems } = useCartStore();

  function increase(index: number) {
    let currentCart = [...cartItems];

    currentCart[index] = {
      ...cartItems[index],
      amount: currentCart[index].amount + 1,
    };

    setCartItems(currentCart);
  }

  function decrease(index: number) {
    let currentCart = [...cartItems];

    if (currentCart[index].amount <= 1  ){
      return;
    }
    currentCart[index] = {
      ...cartItems[index],
      amount: currentCart[index].amount - 1,
    };

    setCartItems(currentCart);
  }


  function remove(index:number){
    let currentCart = [...cartItems];

    currentCart.splice(index, 1)

    setCartItems(currentCart)

  }
  return (
    <main className="section">
      <div className="border-b px-6 py-3">
        <h2> Cart </h2>
      </div>

      <div className="card flex flex-col justify-between ">
        {cartItems.map((cartItem, index) => (
          <CartCard
            key={index}
            cartItem={cartItem}
            increaseAmount={() => increase(index)}
            decreaseAmount={() => decrease(index)}
            removeItem={() => remove(index)}
          />
        ))}
      </div>
    </main>
  );
}
