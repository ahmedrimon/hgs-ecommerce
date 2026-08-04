"use client";

import Link from "next/link";

// Brand SVG Icons (from Simple Icons)
const SocialIcons = {
  Facebook: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Instagram: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  TikTok: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12.525 0h3.08c.54 2.138 2.008 3.82 4.137 4.31v3.224a7.28 7.28 0 01-4.137-1.288v7.054c0 4.14-3.36 7.5-7.5 7.5S.605 17.44.605 13.3s3.36-7.5 7.5-7.5c.342 0 .68.023 1.012.068v3.29a4.23 4.23 0 00-1.012-.124c-2.316 0-4.2 1.884-4.2 4.2s1.884 4.2 4.2 4.2 4.2-1.884 4.2-4.2V0z"/>
    </svg>
  ),
  Pinterest: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z"/>
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="w-full bg-white text-neutral-900 border-t border-neutral-200/60 font-serif">
      {/* 4 COLUMNS */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          
          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.25em] font-semibold uppercase text-neutral-900">ORDERS</h3>
            <ul className="space-y-2.5 text-xs text-neutral-600 font-light tracking-wide">
              <li><Link href="/my-account" className="hover:text-neutral-900 transition-colors">My Account</Link></li>
              <li><Link href="/shipping-returns" className="hover:text-neutral-900 transition-colors">Shipping and Returns</Link></li>
              <li><Link href="/payment-refunds" className="hover:text-neutral-900 transition-colors">Payment and Refunds</Link></li>
              <li><Link href="/faq" className="hover:text-neutral-900 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.25em] font-semibold uppercase text-neutral-900">SERVICES</h3>
            <ul className="space-y-2.5 text-xs text-neutral-600 font-light tracking-wide">
              <li><Link href="/art-of-gifting" className="hover:text-neutral-900 transition-colors">The Art of Gifting</Link></li>
              <li><Link href="/contact" className="hover:text-neutral-900 transition-colors">Contact Us</Link></li>
              <li><Link href="/corporate-gifts" className="hover:text-neutral-900 transition-colors">Corporate Gifts</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.25em] font-semibold uppercase text-neutral-900">INFORMATION</h3>
            <ul className="space-y-2.5 text-xs text-neutral-600 font-light tracking-wide">
              <li><Link href="/news" className="hover:text-neutral-900 transition-colors">News</Link></li>
              <li><Link href="/terms" className="hover:text-neutral-900 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/legal" className="hover:text-neutral-900 transition-colors">Legal</Link></li>
              <li><Link href="/privacy" className="hover:text-neutral-900 transition-colors">Data Protection Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.25em] font-semibold uppercase text-neutral-900">OUR STORES</h3>
            <ul className="space-y-2 text-xs text-neutral-600 font-light tracking-wide">
              <li><Link href="/stores/left-bank" className="hover:text-neutral-900 transition-colors">Left Bank</Link></li>
              <li><Link href="/stores/right-bank" className="hover:text-neutral-900 transition-colors">Right Bank</Link></li>
              <li><Link href="/stores/le-bon-marche" className="hover:text-neutral-900 transition-colors">Le Bon Marché</Link></li>
              <li><Link href="/stores/printemps" className="hover:text-neutral-900 transition-colors">Printemps Haussmann</Link></li>
              <li><Link href="/stores/london" className="hover:text-neutral-900 transition-colors">London</Link></li>
              <li><Link href="/stores/sydney" className="hover:text-neutral-900 transition-colors">Sydney</Link></li>
              <li><Link href="/stores/melbourne" className="hover:text-neutral-900 transition-colors">Melbourne</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-200/80 py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Legal Links */}
          <div className="flex items-center space-x-3 text-[11px] text-neutral-500 font-light tracking-wider">
            <Link href="/terms-of-use" className="hover:text-neutral-900 transition-colors">Terms of use</Link>
            <span className="text-neutral-300">|</span>
            <Link href="/legal" className="hover:text-neutral-900 transition-colors">Legal</Link>
            <span className="text-neutral-300">|</span>
            <Link href="/privacy" className="hover:text-neutral-900 transition-colors">Privacy</Link>
            <span className="text-neutral-300">|</span>
            <Link href="/accessibility" className="hover:text-neutral-900 transition-colors">Accessibility</Link>
          </div>

          {/* Center Logo / Crest */}
          <div className="flex justify-center my-2 md:my-0">
            <div className="w-10 h-12 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Coat_of_Arms_of_France.svg/500px-Coat_of_Arms_of_France.svg.png" 
                alt="Maison Crest Logo"
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Right Side: Direct SVG Social Icons */}
          <div className="flex items-center space-x-4 text-neutral-800">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-neutral-500 transition-colors">
              <SocialIcons.Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-neutral-500 transition-colors">
              <SocialIcons.Instagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-neutral-500 transition-colors">
              <SocialIcons.LinkedIn />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-neutral-500 transition-colors">
              <SocialIcons.TikTok />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest" className="hover:text-neutral-500 transition-colors">
              <SocialIcons.Pinterest />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}