import React from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";

function ProductCard({ product, index }) {
    const CARD_THEMES = [
        "from-zinc-900 via-zinc-800 to-zinc-700",
        "from-slate-100 via-slate-50 to-white",
        "from-gray-100 via-gray-50 to-slate-100",
        "from-neutral-900 via-neutral-800 to-stone-800",
        "from-zinc-100 via-white to-zinc-50",
        "from-stone-100 via-stone-50 to-amber-50",
        "from-gray-50 via-white to-zinc-50",
        "from-stone-900 via-neutral-900 to-zinc-900",
        "from-white via-zinc-50 to-slate-100",
        "from-zinc-900 via-neutral-900 to-stone-900",
        "from-slate-50 via-white to-gray-50",
        "from-zinc-200 via-zinc-100 to-slate-100",
    ];

    const isDark = product.dark;
    const theme = CARD_THEMES[index % CARD_THEMES.length];

    const fmt = (n) => "₹" + n.toLocaleString("en-IN");
    const disc = (p, o) => Math.round((1 - p / o) * 100);

    function Stars({ rating, size = "sm" }) {
        const w = size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5";
        return (
            <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                        key={s}
                        className={`${w} ${s <= Math.floor(rating)
                                ? "fill-amber-400 text-amber-400"
                                : "fill-gray-100 text-gray-200"
                            }`}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">

            {/* ── Image Area ─────────────────────────────────────────── */}
            <div className={`relative bg-gradient-to-br ${theme} aspect-square overflow-hidden`}>

                {/* Badge */}
                {product.badge && (
                    <span className="absolute top-3 left-3 z-10 text-[9px] font-black tracking-[0.12em] px-2.5 py-1 rounded-full bg-white/95 text-gray-900 backdrop-blur-sm shadow-sm uppercase">
                        {product.badge}
                    </span>
                )}

                {/* Wishlist button */}
                <button className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white hover:scale-110 transition-all duration-200">
                    <Heart className="w-3 h-3 text-gray-600" />
                </button>

                {/* Centered img placeholder */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Brand watermark */}
                <div
                    className={`absolute bottom-4 left-4 text-[8px] font-black tracking-[0.3em] uppercase ${isDark ? "text-white/15" : "text-black/10"
                        }`}
                >
                    {product.brand}
                </div>

                {/* Discount pill */}
                <div
                    className={`absolute bottom-3 right-3 text-[9px] font-black tracking-wide px-2 py-0.5 rounded-full ${isDark
                            ? "bg-white/15 text-white/90"
                            : "bg-black/[0.07] text-gray-700"
                        }`}
                >
                    −{disc(product.price, product.originalPrice)}%
                </div>

                {/* Quick Add slide-up */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <button className="w-full py-3 bg-black/95 backdrop-blur-sm text-white text-[10px] font-black tracking-[0.22em] uppercase hover:bg-black transition-colors duration-200">
                        Quick Add +
                    </button>
                </div>
            </div>

            {/* ── Product Info ───────────────────────────────────────── */}
            <div className="p-3 sm:p-3.5">

                {/* Brand label */}
                <p className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-400 mb-0.5">
                    {product.brand}
                </p>

                {/* Product name */}
                <h3 className="text-[13px] font-bold tracking-tight text-gray-900 leading-snug mb-2 line-clamp-1">
                    {product.name}
                </h3>

                {/* Rating row */}
                <div className="flex items-center gap-1.5 mb-2.5">
                    <Stars rating={product.rating} />
                    <span className="text-[11px] font-semibold text-gray-400 leading-none">
                        {product.rating}
                        <span className="text-gray-300 mx-0.5">·</span>
                        {product.reviews.toLocaleString("en-IN")}
                    </span>
                </div>

                {/* Price row */}
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-[14px] sm:text-[15px] font-black text-gray-900">
                            {fmt(product.price)}
                        </span>
                        <span className="text-[11px] text-gray-400 line-through font-medium">
                            {fmt(product.originalPrice)}
                        </span>
                    </div>
                    <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-lg flex-shrink-0">
                        {disc(product.price, product.originalPrice)}% off
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;