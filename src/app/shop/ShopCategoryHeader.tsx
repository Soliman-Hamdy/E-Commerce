import Link from "next/link";
import { PackageOpen } from "lucide-react";

const categoryTitles: Record<string, string> = {
  electronic: "Electronic",
  womensfashion: "Women's Fashion",
  mensfashion: "Men's Fashion",
  beautyhealth: "Beauty&Health",
};

export default function ShopCategoryHeader({
  category,
}: {
  category?: string;
}) {
  const normalizedCategory = category?.toLowerCase().replace(/[^a-z0-9]/g, "");
  const title = normalizedCategory
    ? (categoryTitles[normalizedCategory] ?? category)
    : "All Products";

  return (
    <header className="relative left-1/2 mb-8 w-screen -translate-x-1/2 bg-gradient-to-r from-green-700 via-emerald-500 to-green-400 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12">
        <div className="mb-5 flex items-center gap-2 text-sm">
          <Link href="/" className="text-white/75 transition hover:text-white">
            Home
          </Link>
          <span aria-hidden="true" className="text-white/60">
            /
          </span>
          <span aria-current="page">{title}</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-lg">
            <PackageOpen aria-hidden="true" className="size-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
            <p className="mt-1 text-white/85">
              {normalizedCategory
                ? `Explore our ${title} collection`
                : "Explore our complete product collection"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
