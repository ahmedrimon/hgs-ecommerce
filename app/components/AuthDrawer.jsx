"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AuthDrawer({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if logged in from localStorage
    const authStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(authStatus === "true");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSignIn = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    onClose();
    router.push("/customer/account");
  };

  const handleGoToDashboard = () => {
    onClose();
    router.push("/customer/account");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl p-8 overflow-y-auto flex flex-col justify-between z-10 font-serif">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm tracking-[0.25em] uppercase font-medium text-neutral-900">
              {isLoggedIn ? "MY ACCOUNT" : "LOG IN"}
            </h2>
            <button onClick={onClose} className="p-1 hover:opacity-60 transition-opacity">
              <X size={20} />
            </button>
          </div>

          {isLoggedIn ? (
            /* If logged in, show quick navigation to dashboard */
            <div className="space-y-4">
              <p className="text-xs text-neutral-600 font-light">
                You are currently signed in.
              </p>
              <button
                onClick={handleGoToDashboard}
                className="w-full py-3 bg-neutral-900 text-white text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors"
              >
                GO TO DASHBOARD
              </button>
            </div>
          ) : (
            /* Login Form */
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@trudon.com"
                  className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
                />
              </div>

              <div className="flex justify-between items-center pt-2">
                <Link
                  href="/customer/account/forgotpassword"
                  onClick={onClose}
                  className="text-[11px] text-neutral-500 underline underline-offset-4 hover:text-black"
                >
                  Forgot Your Password?
                </Link>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-neutral-900 text-white text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors"
                >
                  SIGN IN
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Create Account Box (Only shown if NOT logged in) */}
        {!isLoggedIn && (
          <div className="border-t border-neutral-200 pt-6 mt-12">
            <h3 className="text-xs tracking-[0.2em] uppercase font-medium mb-1">
              CREATE AN ACCOUNT
            </h3>
            <p className="text-[11px] text-neutral-500 mb-4 font-light">
              Don't have an account yet?
            </p>

            <Link
              href="/customer/account/create"
              onClick={onClose}
              className="block text-center w-full py-3 bg-neutral-900 text-white text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors"
            >
              SIGN UP
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}