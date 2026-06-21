// EmptyCart.jsx
import React from "react";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20 sm:py-28 px-6 text-center">

      {/* ── Illustration ──────────────────────────────────────────── */}
      {/* Three concentric circles with a shopping bag icon at the centre,
          plus four floating decoration dots — purely decorative, no aria role */}
      <div className="relative mb-10 sm:mb-12" aria-hidden="true">

        {/* Outer ring */}
        <div className="w-40 h-40 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
          {/* Middle ring */}
          <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">
            {/* Inner circle */}
            <div className="w-18 h-18 rounded-full bg-gray-200 flex items-center justify-center p-5">
              <ShoppingBag
                className="w-8 h-8 text-gray-500"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        {/* Floating decorative dots */}
        <span className="absolute -top-1 right-2 w-4 h-4 rounded-full bg-gray-200 border-2 border-white" />
        <span className="absolute top-6 -right-5 w-2.5 h-2.5 rounded-full bg-gray-100" />
        <span className="absolute -bottom-1 left-3 w-3.5 h-3.5 rounded-full bg-gray-200 border-2 border-white" />
        <span className="absolute bottom-5 -left-5 w-2 h-2 rounded-full bg-gray-300" />
      </div>

      {/* ── Copy ──────────────────────────────────────────────────── */}
      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-3">
        Nothing Here Yet
      </p>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-gray-900 mb-4">
        Your cart is empty
      </h2>

      <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-10">
        Looks like you haven't added any sneakers yet.
        Browse our collection and find your perfect pair.
      </p>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <Link to={"/"}>
        <button className="inline-flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 active:bg-black transition-colors text-white text-[11px] font-black uppercase tracking-widest px-8 py-4 rounded-xl group">
          Continue Shopping
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </Link>

      {/* Subtle prompt */}
      <p className="mt-8 text-[10px] font-semibold uppercase tracking-widest text-gray-300">
        Popular picks are waiting for you
      </p>
    </div>
  );
}