"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaCreditCard,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const linkClass = "transition-colors hover:text-white";
const headingClass = "text-lg font-semibold text-white";
const listClass = "mt-5 space-y-3 text-sm";
const socialClass =
  "flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-green-600 hover:text-white";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-10">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                stroke="#16a34a"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* handle + basket */}
                <path d="M2 4h4l4 16h15l3-12H8" />
                {/* basket lines */}
                <path d="M9 12h17M11 16h13" />
                {/* wheels */}
                <circle cx="12" cy="25" r="2" />
                <circle cx="23" cy="25" r="2" />
              </svg>
              <span className="text-2xl font-bold tracking-tight text-slate-800">
                FreshCart
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-6">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500" />
                <Link href="tel:+18001234567" className="hover:text-white">
                  +1 (800) 123-4567
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-green-500" />
                <Link
                  href="mailto:support@freshcart.com"
                  className="hover:text-white"
                >
                  support@freshcart.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-500" />
                <span>123 Commerce Street, New York, NY 10001</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={socialClass}
              >
                <FaFacebookF size={15} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className={socialClass}
              >
                <FaTwitter size={15} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={socialClass}
              >
                <FaInstagram size={15} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className={socialClass}
              >
                <FaYoutube size={15} />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <nav aria-label="Shop">
            <h3 className={headingClass}>Shop</h3>
            <ul className={listClass}>
              <li>
                <Link href="/" className={linkClass}>
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop" className={linkClass}>
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/brands" className={linkClass}>
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/shop?category=electronic" className={linkClass}>
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=women's fashion"
                  className={linkClass}
                >
                  Men&apos;s Fashion
                </Link>
              </li>
              <li>
                <Link href="/shop?category=men's fashion" className={linkClass}>
                  Women&apos;s Fashion
                </Link>
              </li>
            </ul>
          </nav>

          {/* Account */}
          <nav aria-label="Account">
            <h3 className={headingClass}>Account</h3>
            <ul className={listClass}>
              <li>
                <Link href="/" className={linkClass} onClick={scrollToTop}>
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/" className={linkClass} onClick={scrollToTop}>
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className={linkClass}>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/cart" className={linkClass}>
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/login" className={linkClass}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/register" className={linkClass}>
                  Create Account
                </Link>
              </li>
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support">
            <h3 className={headingClass}>Support</h3>
            <ul className={listClass}>
              <li>
                <Link href="/support" onClick={scrollToTop}  className={linkClass}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" onClick={scrollToTop} className={linkClass}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/" className={linkClass}>
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/" className={linkClass}>
                  Returns &amp; Refunds
                </Link>
              </li>
              <li>
                <Link href="/" className={linkClass}>
                  Track Order
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h3 className={headingClass}>Legal</h3>
            <ul className={listClass}>
              <li>
                <Link href="/" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className={linkClass}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className={linkClass}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} FreshCart. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
              <FaCreditCard /> Visa
            </li>
            <li className="flex items-center gap-2">
              <FaCreditCard /> Mastercard
            </li>
            <li className="flex items-center gap-2">
              <FaCreditCard /> PayPal
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
