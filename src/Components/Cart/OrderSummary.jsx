// OrderSummary.jsx
import React from "react";
import { ArrowLeft, Lock, Tag, Shield, RefreshCw, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function OrderSummary() {
    const navigate = useNavigate();
    const { cart, cartTotal } = useCart();

    const subtotal = cartTotal;

    const shipping = 0;

    const discount = 0;

    const total = subtotal - discount + shipping;

    const fmt = (n) => "₹" + n.toLocaleString("en-IN");
    return (
        // lg:sticky keeps the card pinned while the item list scrolls
        <div className="lg:sticky lg:top-6">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

                {/* ── Header ──────────────────────────────────────────────── */}
                <div className="px-6 py-5 border-b border-gray-100">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400 mb-0.5">
                        SoleHub
                    </p>
                    <h2 className="text-base font-black tracking-tight text-gray-900">
                        Order Summary
                    </h2>
                </div>

                <div className="px-6 py-5 flex flex-col gap-5">

                    {/* ── Applied promo badge ─────────────────────────────────── */}
                    <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                        <Tag className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800 leading-none mb-0.5">
                                SOLE15
                            </p>
                            <p className="text-[10px] text-emerald-600 font-medium">
                                5% off applied to your order
                            </p>
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full flex-shrink-0">
                            Active
                        </span>
                    </div>

                    {/* ── Line items ──────────────────────────────────────────── */}
                    <div className="flex flex-col gap-3.5">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 font-medium">Subtotal</span>
                            <span className="text-sm font-bold text-gray-900 tabular-nums">
                                {fmt(subtotal)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 font-medium">Shipping</span>
                            <span className="text-sm font-bold text-emerald-600">
                                Free
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <span className="text-sm text-gray-500 font-medium">Discount</span>
                                <span className="text-[9px] font-black bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-md uppercase tracking-widest">
                                    SOLE15
                                </span>
                            </div>
                            <span className="text-sm font-bold text-emerald-600 tabular-nums">
                                −{fmt(discount)}
                            </span>
                        </div>
                    </div>

                    {/* ── Divider + Total ─────────────────────────────────────── */}
                    <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">
                                    Total
                                </p>
                                <p className="text-[10px] text-gray-400 font-medium">
                                    Incl. all taxes &amp; duties
                                </p>
                            </div>
                            <span className="text-2xl font-black text-gray-900 leading-none tabular-nums">
                                {fmt(total)}
                            </span>
                        </div>
                    </div>

                    {/* ── CTA Buttons ─────────────────────────────────────────── */}
                    <div className="flex flex-col gap-3 pt-1">
                        {/* Primary: Checkout */}
                        <button className="w-full bg-gray-900 hover:bg-gray-800 active:bg-black transition-colors text-white text-[11px] font-black uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                            <Lock className="w-3.5 h-3.5" />
                            Proceed to Checkout
                        </button>

                        {/* Secondary: Continue shopping */}
                        <button
                            onClick={() => navigate("/")}
                            className="w-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100 transition-all text-gray-900 text-[11px] font-black uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2">
                            <ArrowLeft className="w-3.5 h-3.5" />

                            Continue Shopping
                        </button>
                    </div>

                    {/* ── Trust badges ────────────────────────────────────────── */}
                    <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-center justify-between flex-wrap gap-y-2">
                            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400">
                                <Shield className="w-3 h-3 flex-shrink-0" />
                                Secure Checkout
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400">
                                <RefreshCw className="w-3 h-3 flex-shrink-0" />
                                Easy Returns
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400">
                                <Truck className="w-3 h-3 flex-shrink-0" />
                                Free Shipping
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}