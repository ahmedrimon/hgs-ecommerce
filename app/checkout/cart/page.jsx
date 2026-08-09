"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartSubtotal } = useCart();

  const shippingCost = 10.0;
  const taxCost = 0.0;
  const totalCost = cartSubtotal + (cart.length > 0 ? shippingCost : 0) + taxCost;

  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-center font-serif text-xl tracking-[0.3em] font-light uppercase my-8">
          SHOPPING CART
        </h1>

        {/* Top Action Header Bar (Trudon Style) */}
        <div className="border-t border-b border-neutral-200 py-3 mb-10 flex justify-between items-center text-xs font-serif uppercase tracking-widest">
          <Link
            href="/category/eaux-de-parfum"
            className="text-neutral-500 hover:text-black transition-colors underline underline-offset-4"
          >
            Continue Shopping
          </Link>

          <Link
            href="/checkout"
            className="px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors tracking-[0.2em]"
          >
            PROCEED TO CHECKOUT
          </Link>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.length === 0 ? (
              <div className="py-16 text-center font-serif text-xs tracking-widest text-neutral-500 uppercase">
                Your shopping cart is currently empty.
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-neutral-200 pb-6 gap-4 font-serif"
                >
                  {/* Thumbnail & Name */}
                  <div className="flex items-center gap-4 w-1/2">
                    <div className="w-16 h-20 bg-neutral-50 flex items-center justify-center p-2 border border-neutral-100 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs font-medium tracking-wider uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs font-sans text-neutral-600 mt-1">
                        €{item.price ? item.price.toFixed(2) : "0.00"}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center border border-neutral-300">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2.5 py-1 text-xs hover:bg-neutral-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-sans">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2.5 py-1 text-xs hover:bg-neutral-100"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal & Remove */}
                  <div className="text-right">
                    <div className="text-xs font-sans font-medium">
                      €{((item.price || 0) * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[10px] text-neutral-400 hover:text-red-600 uppercase tracking-widest mt-1"
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Order Summary (Sidebar) */}
          <div className="bg-neutral-50 p-6 border border-neutral-200 font-serif self-start space-y-4">
            <h2 className="text-xs tracking-[0.2em] uppercase font-medium text-neutral-700 border-b border-neutral-200 pb-3">
              ORDER SUMMARY
            </h2>

            <div className="space-y-3 text-xs font-sans text-neutral-600">
              <div className="flex justify-between">
                <span>SUBTOTAL</span>
                <span>€{cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>SHIPPING (DPD)</span>
                <span>€{cart.length > 0 ? shippingCost.toFixed(2) : "0.00"}</span>
              </div>
              <div className="flex justify-between">
                <span>TAX</span>
                <span>€{taxCost.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-4 flex justify-between text-xs font-bold font-serif tracking-wider text-neutral-900">
              <span>ORDER TOTAL</span>
              <span className="font-sans">€{totalCost.toFixed(2)}</span>
            </div>

            <a
              href="/checkout"
              className="block w-full text-center py-3.5 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors mt-6"
            >
              PROCEED TO CHECKOUT
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}