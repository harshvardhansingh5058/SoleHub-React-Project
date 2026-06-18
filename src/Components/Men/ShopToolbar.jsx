import React from 'react'
import { Search, ChevronDown } from 'lucide-react'

export default function ShopToolbar({ totalProducts, searchTerm, setSearchTerm, sortBy, setSortBy }) {
    return (
        <div className="mb-6 space-y-3">

            {/* ── Top row: count + sort ───────────────────────────────── */}
            <div className="flex flex-wrap items-center justify-between gap-3">

                {/* Product count badge */}
                <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center min-w-[32px] h-8 px-2.5 rounded-xl bg-black text-white text-[12px] font-black">
                        {totalProducts}
                    </span>
                    <span className="text-sm font-semibold text-gray-500">
                        product{totalProducts !== 1 ? 's' : ''} found
                    </span>
                </div>

                {/* Sort dropdown */}
                <div className="relative">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-[12.5px] font-semibold text-gray-700 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-800 transition-all duration-200 shadow-sm"
                    >
                        <option value="">Sort: Featured</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                </div>
            </div>

            {/* ── Search bar ─────────────────────────────────────────── */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                    type="text"
                    placeholder="Search by name, brand, or style..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-800 transition-all duration-200 shadow-sm"
                />
            </div>
        </div>
    )
}