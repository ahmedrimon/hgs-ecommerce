"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateAccountPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    newsletter: false,
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/customer/account");
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-serif pt-28 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-xl md:text-2xl tracking-[0.3em] font-light uppercase text-center mb-12">
        CREATE NEW CUSTOMER ACCOUNT
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-8">
          {/* Personal Info Section */}
          <div className="space-y-4">
            <h2 className="text-xs tracking-[0.2em] font-medium uppercase border-b border-neutral-200 pb-2">
              PERSONAL INFORMATION
            </h2>

            <div>
              <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
                FIRST NAME
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
                LAST NAME
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <input
                type="checkbox"
                id="newsletter"
                checked={formData.newsletter}
                onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                className="h-4 w-4 rounded border-neutral-300 text-black focus:ring-black"
              />
              <label htmlFor="newsletter" className="text-xs tracking-wider text-neutral-600">
                SIGN UP FOR NEWSLETTER
              </label>
            </div>

            <div className="pt-2">
              <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
                DATE OF BIRTH
              </label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>
          </div>

          {/* Sign In Info Section */}
          <div className="space-y-4 pt-4">
            <h2 className="text-xs tracking-[0.2em] font-medium uppercase border-b border-neutral-200 pb-2">
              SIGN-IN INFORMATION
            </h2>

            <div>
              <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
                EMAIL
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
                PASSWORD
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors"
          >
            CREATE AN ACCOUNT
          </button>
        </form>

        {/* Info Box */}
        <div className="bg-neutral-50 p-6 border border-neutral-200 h-fit space-y-3">
          <h3 className="text-xs tracking-[0.2em] font-medium uppercase">
            WHY AN ACCOUNT?
          </h3>
          <p className="text-xs text-neutral-600 font-light leading-relaxed">
            In addition to ease your order process, creating an account will allow you to save history of your orders, register more than one delivery address and follow your shipping.
          </p>
        </div>
      </div>
    </div>
  );
}