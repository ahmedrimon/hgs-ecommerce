"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const supabase = createClient();

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
    } else {
      alert("Password updated successfully!");
      router.push("/customer/account");
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-serif pt-28 pb-20 max-w-md mx-auto px-6">
      <h1 className="text-xl tracking-[0.25em] font-light uppercase text-center mb-8">
        CREATE NEW PASSWORD
      </h1>

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-800 text-xs p-3 mb-6">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handlePasswordUpdate} className="space-y-4">
        <div>
          <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
            New Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="block text-[11px] tracking-widest text-neutral-500 uppercase mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-neutral-300 p-2.5 text-xs font-sans focus:outline-none focus:border-black"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-neutral-900 text-white text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors disabled:opacity-50"
        >
          {loading ? "UPDATING..." : "SAVE NEW PASSWORD"}
        </button>
      </form>
    </div>
  );
}