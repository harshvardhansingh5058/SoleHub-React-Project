// CartItems.jsx
import React from "react";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "../../Context/CartContext";

const fmt = (n) => "₹" + n.toLocaleString("en-IN");
const disc = (p, o) => Math.round((1 - p / o) * 100);

export default function CartItems() {
    // Cart now comes entirely from CartContext — single source of truth,
    // shared with Header's badge and ProductHero's addToCart.
    const { cart, incrementQty, decrementQty, removeFromCart } = useCart();
    return (
        <div className="flex flex-col gap-4">

            {/* ── Section label + count ─────────────────────────────────── */}
            <div className="flex items-center justify-between mb-1">
                <h2 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.22em] text-gray-400">
                    Your Items
                </h2>
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    {cart.length} {cart.length === 1 ? "item" : "items"}
                </span>
            </div>

            {/* ── Desktop: column header row ────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-6 px-5 pb-3 border-b border-gray-100">
                <span className="flex-1 text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 min-w-0">
                    Product
                </span>
                <span className="w-24 text-center text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Size
                </span>
                <span className="w-28 text-center text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Quantity
                </span>
                <span className="w-24 text-right text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Total
                </span>
                <span className="w-8" />
            </div>

            {/* ── Item list ─────────────────────────────────────────────── */}
            <div className="flex flex-col gap-3">
                {cart.map((item) => {
                    const qty = item.qty || 1;
                    const lineTotal = item.price * qty;

                    return (
                        <div
                            key={`${item.id}-${item.size}`}
                            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 group"
                        >
                            {/* ════════════════ DESKTOP ROW ════════════════════════ */}
                            <div className="hidden lg:flex items-center gap-6 px-5 py-4">

                                {/* Product column: image + info */}
                                <div className="flex items-center gap-4 flex-1 min-w-0">

                                    {/* Gradient image block */}
                                    <div
                                        className={`relative w-[88px] h-[88px] bg-gradient-to-br ${item.theme} rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden`}
                                    >
                                        {item.badge && (
                                            <span className="absolute top-2 left-2 z-10 text-[7px] font-black tracking-[0.1em] uppercase px-1.5 py-0.5 rounded-full bg-white/90 text-gray-900 shadow-sm">
                                                {item.badge}
                                            </span>
                                        )}
                                        <img
                                            src={item.image}
                                            alt={`${item.brand} ${item.name}`}
                                            className="w-[72px] h-[72px] object-contain group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="min-w-0">
                                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">
                                            {item.brand}
                                        </p>
                                        <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1.5 truncate max-w-[180px]">
                                            {item.name}
                                        </h3>
                                        <p className="text-[11px] text-gray-500 font-medium mb-1.5 truncate max-w-[180px]">
                                            {item.color}
                                        </p>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[10px] text-gray-400 line-through font-medium">
                                                {fmt(item.originalPrice)}
                                            </span>
                                            <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                                                {disc(item.price, item.originalPrice)}% off
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Size */}
                                <div className="w-24 flex justify-center">
                                    <span className="text-[11px] font-bold text-gray-700 bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-xl">
                                        {item.size}
                                    </span>
                                </div>

                                {/* Quantity stepper */}
                                <div className="w-28 flex justify-center">
                                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => decrementQty(item.id, item.size)}
                                            aria-label="Decrease quantity"
                                            className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200 transition-colors"
                                        >
                                            <Minus className="w-3 h-3" />
                                        </button>
                                        <span className="w-8 text-center text-sm font-black text-gray-900 select-none tabular-nums">
                                            {qty}
                                        </span>
                                        <button
                                            onClick={() => incrementQty(item.id, item.size)}
                                            aria-label="Increase quantity"
                                            className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200 transition-colors"
                                        >
                                            <Plus className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>

                                {/* Total price */}
                                <div className="w-24 text-right flex-shrink-0">
                                    <p className="text-sm font-black text-gray-900 tabular-nums">
                                        {fmt(lineTotal)}
                                    </p>
                                    {qty > 1 && (
                                        <p className="text-[10px] text-gray-400 mt-0.5 tabular-nums">
                                            {fmt(item.price)} each
                                        </p>
                                    )}
                                </div>

                                {/* Remove */}
                                <div className="w-8 flex justify-end">
                                    <button
                                        onClick={() => removeFromCart(item.id, item.size)}
                                        aria-label="Remove item"
                                        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 active:bg-red-100 transition-all duration-200"
                                    >
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>

                            {/* ════════════════ MOBILE CARD ════════════════════════ */}
                            <div className="lg:hidden p-4">

                                {/* Row 1: image + name + remove */}
                                <div className="flex gap-3.5 mb-4">

                                    {/* Image */}
                                    <div
                                        className={`relative w-20 h-20 bg-gradient-to-br ${item.theme} rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden`}
                                    >
                                        <img
                                            src={item.image}
                                            alt={`${item.brand} ${item.name}`}
                                            className="w-16 h-16 object-contain"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="min-w-0 flex-1">
                                                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-400 mb-0.5">
                                                    {item.brand}
                                                </p>
                                                <h3 className="text-sm font-bold text-gray-900 leading-tight truncate">
                                                    {item.name}
                                                </h3>
                                                {item.badge && (
                                                    <span className="inline-block mt-1.5 text-[8px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full bg-gray-900 text-white">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id, item.size)}
                                                aria-label="Remove item"
                                                className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all flex-shrink-0"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </div>
                                        <p className="text-[11px] text-gray-500 font-medium mt-1 truncate">
                                            {item.color}
                                        </p>
                                    </div>
                                </div>

                                {/* Row 2: size + qty stepper + price */}
                                <div className="flex items-center justify-between gap-3 pt-3.5 border-t border-gray-100">

                                    <div className="flex items-center gap-2">
                                        {/* Size pill */}
                                        <span className="text-[10px] font-bold text-gray-700 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-lg flex-shrink-0">
                                            {item.size}
                                        </span>

                                        {/* Qty stepper */}
                                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                            <button
                                                onClick={() => decrementQty(item.id, item.size)}
                                                aria-label="Decrease quantity"
                                                className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                                            >
                                                <Minus className="w-2.5 h-2.5" />
                                            </button>
                                            <span className="w-7 text-center text-xs font-black text-gray-900 select-none tabular-nums">
                                                {qty}
                                            </span>
                                            <button
                                                onClick={() => incrementQty(item.id, item.size)}
                                                aria-label="Increase quantity"
                                                className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                                            >
                                                <Plus className="w-2.5 h-2.5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="text-right">
                                        <p className="text-sm font-black text-gray-900 tabular-nums">
                                            {fmt(lineTotal)}
                                        </p>
                                        <p className="text-[10px] font-black text-emerald-600">
                                            {disc(item.price, item.originalPrice)}% off
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}