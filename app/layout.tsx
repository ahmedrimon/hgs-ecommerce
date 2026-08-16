// app/layout.js (or src/app/layout.js)

import { Inter } from "next/font/google";
import Navbar from "./components/Navbar"; // Imports your Navbar component

import { CartProvider } from "../context/cartContext"; // Imports your CartProvider component
import "./globals.css";

import CartDrawer from "./components/CartDrawer"; // Adjust path if needed
import Footer from "./components/Footer";

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
        <CartProvider>
          {children}
          <CartDrawer /> {/* MUST BE HERE */}
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}