"use client";

import { useCart } from "@/context/cartContext";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartSubtotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/40 transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        {/* Drawer Content Panel with Explicit Light Mode Background & Dark Text */}
        <div className="w-screen max-w-md bg-white text-neutral-900 shadow-xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
            <h2 className="font-serif text-sm tracking-[0.2em] font-medium uppercase text-neutral-900">
              Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-neutral-500 hover:text-neutral-900 p-2 text-sm"
            >
              ✕
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <p className="text-center font-serif text-xs tracking-widest text-neutral-500 my-12 uppercase">
                Your cart is empty
              </p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-neutral-100 pb-6">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-neutral-50 flex items-center justify-center p-2 rounded-sm border border-neutral-200 shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between font-serif">
                    <div>
                      <h3 className="text-xs font-semibold tracking-wider text-neutral-900 uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs font-sans text-neutral-600 mt-1">
                        €{item.price ? item.price.toFixed(2) : "0.00"}
                      </p>
                    </div>

                    {/* Quantity Controls & Remove */}
                    <div className="flex items-center justify-between text-xs font-sans mt-3">
                      <div className="flex items-center border border-neutral-300 bg-neutral-50">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-neutral-700 hover:bg-neutral-200"
                        >
                          -
                        </button>
                        <span className="px-3 py-0.5 text-neutral-900 font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-neutral-700 hover:bg-neutral-200"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[10px] tracking-widest text-neutral-400 hover:text-red-600 uppercase transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout Button */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-neutral-200 bg-white font-serif space-y-4">
              <div className="flex justify-between items-center text-xs tracking-widest uppercase">
                <span className="text-neutral-600">Cart Subtotal</span>
                <span className="text-neutral-900 font-bold font-sans">
                  €{cartSubtotal ? cartSubtotal.toFixed(2) : "0.00"}
                </span>
              </div>

              <a
                href="/checkout/cart"
                className="block w-full text-center py-3.5 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors"
              >
                View Cart
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}