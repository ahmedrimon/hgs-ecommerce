"use client";

import { useCart } from "../../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartSubtotal } = useCart();
  const tax = cartSubtotal * 0.166; // Sample VAT/Tax calculation

  return (
    <div className="min-h-screen bg-white font-serif pt-28 pb-20 px-6 max-w-6xl mx-auto text-neutral-900">
      <h1 className="text-2xl font-light tracking-[0.25em] uppercase text-center mb-12">
        SHOPPING CART
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xs text-neutral-500 mb-6 uppercase tracking-wider">
            Your shopping cart is empty.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-neutral-900 text-white text-xs tracking-widest uppercase"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Items Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="border-b pb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6 py-4 items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover" />
                  <div className="flex-1">
                    <h2 className="text-sm font-light tracking-widest uppercase">
                      {item.name}
                    </h2>
                    <p className="text-xs font-sans mt-1">€{item.price.toFixed(2)}</p>
                  </div>
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    className="border p-1.5 text-xs font-sans"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs font-sans w-20 text-right">
                    €{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[11px] text-neutral-400 hover:text-black uppercase underline ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <Link
              href="/checkout/shipping"
              className="block w-full py-4 bg-neutral-900 text-white text-center text-xs tracking-[0.25em] uppercase hover:bg-neutral-800 transition-colors"
            >
              PROCEED TO CHECKOUT
            </Link>
          </div>

          {/* Summary Column */}
          <div className="bg-neutral-50 p-6 h-fit space-y-4 text-xs font-sans border">
            <h3 className="font-serif text-sm tracking-widest uppercase border-b pb-3 font-light">
              ORDER SUMMARY
            </h3>
            <div className="flex justify-between">
              <span className="text-neutral-500">SUBTOTAL</span>
              <span>€{cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">SHIPPING (DPD)</span>
              <span>€0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">TAX</span>
              <span>€{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t pt-3 font-bold text-sm">
              <span>ORDER TOTAL</span>
              <span>€{cartSubtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}