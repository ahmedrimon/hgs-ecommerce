# Maison Trudon — Luxury E-Commerce Experience

A modern, responsive e-commerce web application inspired by **Maison Trudon**. Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **React Context API**, this platform showcases high-end luxury candles, hand lotions, diffusers, and perfumes with interactive shopping cart state and custom collection pages.

🚀 **Live Demo:** [https://your-project-name.vercel.app](https://your-project-name.vercel.app)

---

## 🌟 Key Features

* **Collection Pages:** Custom landing pages for signature collections including *Carmen* and *Cire*, featuring luxury editorial banners, detailed story sections, and scent profile grids.
* **Novelties & Product Browsing:** Complete product showcase with filterable categories (Candles, Perfumes, Gifts, Decoration) and slide-over filtering drawer.
* **Interactive Shopping Cart:** Full client-side cart management powered by React Context (`useCart`) allowing instant addition, badge notifications, and price subtotals.
* **Serverless API Routes:** Integrated Next.js API endpoints for secure payment intent handling and dynamic data fetching.
* **Responsive & Pixel-Perfect UI:** Modern serif typography, clean grid structures, hover micro-interactions, and fully mobile-friendly layouts built with Tailwind CSS.
* **Dynamic Metadata & Favicon:** Integrated Next.js Metadata API with custom SVG favicon support.

---

## 🛠️ Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS
* **Language:** JavaScript (ES6+) / React
* **State Management:** React Context API (`CartContext`)
* **Icons & Media:** Lucide React / Unsplash Imagery
* **Deployment:** Vercel

---

## 📂 Project Structure

```text
├── app/
│   ├── api/
│   │   └── create-payment-intent/    # Serverless API route for payments
│   ├── collections/
│   │   ├── carmen/                   # Carmen collection landing page
│   │   └── cire/                     # Cire collection landing page
│   ├── novelties/                    # Novelties (See All) catalog page
│   ├── icon.svg                      # Custom dynamic SVG favicon
│   ├── layout.jsx                    # Root layout & global providers
│   └── page.jsx                      # Homepage
├── context/
│   └── CartContext.jsx               # Shopping cart state management
├── public/                           # Static assets
└── package.json

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
