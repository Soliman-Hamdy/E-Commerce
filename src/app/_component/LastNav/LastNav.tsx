import { Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LastNav() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 border-y border-green-100 bg-green-50 px-4 py-5 sm:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 sm:px-2 lg:grid-cols-4">
        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
            <Truck aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Free Shipping
            </h2>
            <p className="text-xs text-slate-500">On orders over 500 EGP</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
            <RotateCcw aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Easy Returns
            </h2>
            <p className="text-xs text-slate-500">14-day return policy</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
            <ShieldCheck aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Secure Payment
            </h2>
            <p className="text-xs text-slate-500">100% secure checkout</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
            <Headset aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              24/7 Support
            </h2>
            <p className="text-xs text-slate-500">Contact us anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
