"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartSubtotal } =
    useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <h2 className="text-xs tracking-[0.2em] uppercase font-serif">CART</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-lg hover:opacity-60"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-xs text-neutral-500 font-serif">
                You have no items in your shopping cart.
              </p>
            ) : (
              <div className="space-y-6 max-h-[60vh] overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start border-b pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-20 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xs uppercase font-serif font-medium tracking-wider">
                        {item.name}
                      </h3>
                      <p className="text-xs font-sans mt-1">€{item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-3 mt-3 text-xs">
                        <select
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                          className="border p-1 text-xs"
                        >
                          {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ))}
                        </select>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] text-neutral-400 hover:text-red-600 underline uppercase"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t pt-6 space-y-4">
              <div className="flex justify-between text-xs tracking-widest font-serif">
                <span>CART SUBTOTAL</span>
                <span>€{cartSubtotal.toFixed(2)}</span>
              </div>
              <Link
                href="/checkout/cart"
                onClick={() => setIsCartOpen(false)}
                className="block w-full py-3.5 bg-neutral-900 text-white text-center text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors"
              >
                VIEW CART
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}