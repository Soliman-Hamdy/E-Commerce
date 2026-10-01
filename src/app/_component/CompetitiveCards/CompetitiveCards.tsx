import { Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react";

export default function CompetitiveCards() {
  return (
    <section
      aria-label="Shopping benefits"
      className="relative left-1/2 w-screen -translate-x-1/2 border-y border-gray-200 bg-gray-50 px-4 py-5 sm:px-6"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500">
            <Truck aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Free Shipping
            </h2>
            <p className="text-xs text-slate-500">On orders over 500 EGP</p>
          </div>
        </article>
        <article className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
            <ShieldCheck aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Secure Payment
            </h2>
            <p className="text-xs text-slate-500">100% secure transactions</p>
          </div>
        </article>
        <article className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
            <RotateCcw aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Easy Returns
            </h2>
            <p className="text-xs text-slate-500">14-day return policy</p>
          </div>
        </article>
        <article className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-500">
            <Headset aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              24/7 Support
            </h2>
            <p className="text-xs text-slate-500">Dedicated support team</p>
          </div>
        </article>
      </div>
    </section>
  );
}
