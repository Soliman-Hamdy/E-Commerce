import Link from "next/link";
import { Tag } from "lucide-react";

export default function BrandsHeader() {
  return (
    <header className="relative left-1/2 mb-8 w-screen -translate-x-1/2 bg-gradient-to-r from-violet-600 via-purple-500 to-purple-400 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12">
        <div className="mb-5 flex items-center gap-2 text-sm">
          <Link href="/" className="text-white/75 transition hover:text-white">
            Home
          </Link>
          <span aria-hidden="true" className="text-white/60">
            /
          </span>
          <span aria-current="page">Brands</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-lg">
            <Tag aria-hidden="true" className="size-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">Top Brands</h1>
            <p className="mt-1 text-white/85">Shop from your favorite brands</p>
          </div>
        </div>
      </div>
    </header>
  );
}
