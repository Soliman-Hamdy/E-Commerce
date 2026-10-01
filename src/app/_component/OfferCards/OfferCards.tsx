import Link from "next/link";
import { ArrowRight, Flame, Sparkles } from "lucide-react";

export default function OfferCards() {
  return (
    <section
      aria-label="Current offers"
      className="grid w-full grid-cols-1 gap-5 py-6 lg:grid-cols-2 lg:gap-6"
    >
      <article className="offer-enter-left relative isolate flex min-h-72 flex-col items-start justify-center overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500 via-green-600 to-emerald-800 px-6 py-7 text-white sm:min-h-75 sm:px-8 sm:py-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_72%,white_72%,white_73%,transparent_73%),linear-gradient(45deg,transparent_88%,white_88%,white_89%,transparent_89%)] opacity-15"
        />
        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
          <Flame aria-hidden="true" className="size-4" />
          Deal of the Day
        </span>
        <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
          Fresh Organic Fruits
        </h2>
        <p className="mt-2 text-sm text-white/90 sm:text-base">
          Get up to 40% off on selected organic fruits
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
          <p className="text-3xl font-bold sm:text-4xl">40% OFF</p>
          <p className="text-sm text-white/90">
            Use code: <span className="font-bold text-white">ORGANIC40</span>
          </p>
        </div>
        <Link
          href="/shop"
          className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Shop Now
          <ArrowRight aria-hidden="true" className="size-5" />
        </Link>
      </article>

      <article className="offer-enter-right relative isolate flex min-h-72 flex-col items-start justify-center overflow-hidden rounded-2xl bg-linear-to-br from-orange-400 via-red-500 to-rose-600 px-6 py-7 text-white sm:min-h-75 sm:px-8 sm:py-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_72%,white_72%,white_73%,transparent_73%),linear-gradient(45deg,transparent_88%,white_88%,white_89%,transparent_89%)] opacity-15"
        />
        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
          <Sparkles aria-hidden="true" className="size-4" />
          New Arrivals
        </span>
        <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
          Exotic Vegetables
        </h2>
        <p className="mt-2 text-sm text-white/90 sm:text-base">
          Discover our latest collection of premium vegetables
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
          <p className="text-3xl font-bold sm:text-4xl">25% OFF</p>
          <p className="text-sm text-white/90">
            Use code: <span className="font-bold text-white">FRESH25</span>
          </p>
        </div>
        <Link
          href="/shop"
          className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Explore Now
          <ArrowRight aria-hidden="true" className="size-5" />
        </Link>
      </article>
    </section>
  );
}
