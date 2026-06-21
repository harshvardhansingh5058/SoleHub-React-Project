// CartHero.jsx
import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export default function CartHero() {
    const { cart } = useCart();
    return (
        <section className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 sm:py-10 lg:py-12">

                {/* ── Breadcrumb ────────────────────────────────────────────── */}
                <nav className="flex items-center gap-2 mb-6 sm:mb-8" aria-label="Breadcrumb">
                    <Link to={"/"}>
                    <button className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-900 transition-colors group">
                        <Home className="w-3 h-3 flex-shrink-0" />
                        Home
                    </button>
                    </Link>
                    <ChevronRight className="w-3 h-3 text-gray-300 flex-shrink-0" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-900">
                        Cart
                    </span>
                </nav>

                {/* ── Title row ─────────────────────────────────────────────── */}
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-2.5">
                            Review &amp; Checkout
                        </p>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-none">
                            Shopping Cart
                        </h1>
                    </div>

                    {/* Item count badge */}
                    <div className="flex items-center gap-2 bg-gray-900 text-white pl-3 pr-3.5 sm:pl-3.5 sm:pr-4 py-2 sm:py-2.5 rounded-full flex-shrink-0 shadow-sm shadow-gray-900/10 ring-1 ring-gray-900/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
                        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest whitespace-nowrap">
                            {cart.length} {cart.length === 1 ? "Item" : "Items"}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}