// PopularPicks.jsx — refactored to use the Men page ProductCard component
//
// DATA CHANGES (no logic changed, only shape to match ProductCard's props):
//   tag         → badge
//   img         → image
//   price       → number (e.g., 7499)  instead of string ("₹7,499")
//   originalPrice → number (e.g., 9999) instead of string ("₹9,999")
//   bg          → dark: boolean (true only when bg was bg-gray-900)
//
// PATH: adjust the ProductCard import to match your folder structure.
//   If ProductCard.jsx is shared (e.g. src/Components/ProductCard.jsx):
//     import ProductCard from "../ProductCard";
//   If it lives inside the Men folder:
//     import ProductCard from "../Men/ProductCard";

import React from "react";
import ProductCard from "../Common/ProductCard"; 
import { products } from "../Common/ProductData";



export default function PopularPicks() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header — mirrors Men's "Featured Picks" header exactly ── */}
        <div className="flex flex-col sm:flex-row sm:items-end items-start gap-4 sm:gap-0 justify-between mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-gray-100">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
              Curated for You
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Popular Picks
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* ── Product Grid — Men's ProductCard reused as-is, no modifications ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};