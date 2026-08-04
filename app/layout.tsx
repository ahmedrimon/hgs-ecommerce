// app/layout.js (or src/app/layout.js)

import { Inter } from "next/font/google";
import Navbar from "./components/Navbar"; // Imports your Navbar component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TRVDON | E-Commerce",
  description: "Luxury Fragrances and Candles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // <-- Type definition added here
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation bar placed globally */}
        <Navbar />

        {/* Page contents (page.js files) will render here */}
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}