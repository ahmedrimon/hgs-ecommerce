// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function AccountDashboardPage() {
//   const router = useRouter();

//  const handleSignOut = () => {
//   localStorage.removeItem("isLoggedIn");
//   router.push("/customer/account/logoutSuccess");
// };

//   return (
//     <div className="min-h-screen bg-white text-neutral-900 font-serif pt-28 pb-20 max-w-6xl mx-auto px-6">
//       <h1 className="text-2xl tracking-[0.3em] font-light uppercase mb-2">
//         MY ACCOUNT
//       </h1>
//       <p className="text-xs text-neutral-500 mb-8">
//         Welcome to your personal account dashboard.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Navigation Sidebar */}
//         <div className="space-y-3 text-xs tracking-widest uppercase border-r border-neutral-200 pr-6">
//           <Link href="/customer/account" className="block font-bold text-black">
//             DASHBOARD
//           </Link>
//           <Link href="#" className="block text-neutral-500 hover:text-black">
//             MY ORDERS
//           </Link>
//           <Link href="#" className="block text-neutral-500 hover:text-black">
//             MY WISHLIST
//           </Link>
//           <Link href="#" className="block text-neutral-500 hover:text-black">
//             ADDRESS BOOK
//           </Link>
//           <button
//             onClick={handleSignOut}
//             className="block pt-6 text-neutral-400 underline uppercase hover:text-black"
//           >
//             Sign out
//           </button>
//         </div>

//         {/* Dashboard Grid Cards */}
//         <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="border border-neutral-200 p-6 space-y-2">
//             <h3 className="text-xs tracking-widest font-bold uppercase">
//               ACCOUNT INFORMATION
//             </h3>
//             <p className="text-xs text-neutral-600 font-light">
//               User Name<br />
//               user@example.com
//             </p>
//           </div>

//           <div className="border border-neutral-200 p-6 space-y-2">
//             <h3 className="text-xs tracking-widest font-bold uppercase">
//               NEWSLETTER
//             </h3>
//             <p className="text-xs text-neutral-600 font-light">
//               You are subscribed to our newsletter.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AccountDashboardPage() {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/");
      } else {
        setUser(user);
      }
      setLoading(false);
    }
    getUser();
  }, [router, supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/customer/account/logoutSuccess");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white font-serif pt-32 text-center text-xs tracking-widest uppercase">
        Loading Account Details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-serif pt-28 pb-20 max-w-6xl mx-auto px-6">
      <h1 className="text-2xl tracking-[0.3em] font-light uppercase mb-2">
        MY ACCOUNT
      </h1>
      <p className="text-xs text-neutral-500 mb-8">
        Welcome to your personal account dashboard.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3 text-xs tracking-widest uppercase border-r border-neutral-200 pr-6">
          <Link href="/customer/account" className="block font-bold text-black">
            DASHBOARD
          </Link>
          <Link href="#" className="block text-neutral-500 hover:text-black">
            MY ORDERS
          </Link>
          <Link href="#" className="block text-neutral-500 hover:text-black">
            MY WISHLIST
          </Link>
          <Link href="#" className="block text-neutral-500 hover:text-black">
            ADDRESS BOOK
          </Link>
          <button
            onClick={handleSignOut}
            className="block pt-6 text-neutral-400 underline uppercase hover:text-black text-left"
          >
            Sign out
          </button>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-neutral-200 p-6 space-y-2">
            <h3 className="text-xs tracking-widest font-bold uppercase">
              ACCOUNT INFORMATION
            </h3>
            <p className="text-xs text-neutral-600 font-light">
              {user?.user_metadata?.first_name} {user?.user_metadata?.last_name}<br />
              {user?.email}
            </p>
          </div>

          <div className="border border-neutral-200 p-6 space-y-2">
            <h3 className="text-xs tracking-widest font-bold uppercase">
              NEWSLETTER
            </h3>
            <p className="text-xs text-neutral-600 font-light">
              {user?.user_metadata?.newsletter
                ? "You are subscribed to our newsletter."
                : "You are not currently subscribed to our newsletter."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}