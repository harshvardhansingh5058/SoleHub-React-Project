import React from 'react'

export default function FilterSlidebar({ selectBrand, setSelectBrand, brand, categories, setSelectCategory, selectCategory, setSearchTerm, setSortBy }) {

    const handleClear = () => {
        setSelectBrand("");
        setSelectCategory("");
        setSearchTerm("");
        setSortBy("");
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            {/* ── Header ─────────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <span className="text-[10px] font-black tracking-[0.22em] uppercase text-gray-900">
                    Filters
                </span>
                <button
                    onClick={handleClear}
                    className="text-[11px] font-semibold text-gray-400 hover:text-gray-900 transition-colors duration-200"
                >
                    Reset
                </button>
            </div>

            {/* ── Brands ─────────────────────────────────────────────── */}
            <div className="px-5 py-4 border-b border-gray-100">
                <p className="text-[9px] font-black tracking-[0.28em] uppercase text-gray-400 mb-2.5">
                    Brand
                </p>
                <div className="space-y-0.5">
                    {brand.map((b) => (
                        <label
                            key={b.id}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer select-none transition-all duration-200 ${
                                selectBrand === b.value
                                    ? 'bg-black'
                                    : 'hover:bg-gray-50'
                            }`}
                        >
                            <input
                                type='radio'
                                name='brand'
                                value={b.value}
                                checked={selectBrand === b.value}
                                onChange={(e) => setSelectBrand(e.target.value)}
                                className="sr-only"
                            />
                            <span
                                className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                    selectBrand === b.value
                                        ? 'border-white'
                                        : 'border-gray-300 bg-white'
                                }`}
                            >
                                {selectBrand === b.value && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                                )}
                            </span>
                            <span
                                className={`text-[12.5px] font-semibold leading-none transition-colors duration-200 ${
                                    selectBrand === b.value ? 'text-white' : 'text-gray-600'
                                }`}
                            >
                                {b.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* ── Categories ─────────────────────────────────────────── */}
            <div className="px-5 py-4 border-b border-gray-100">
                <p className="text-[9px] font-black tracking-[0.28em] uppercase text-gray-400 mb-2.5">
                    Category
                </p>
                <div className="space-y-0.5">
                    {categories.map((category) => (
                        <label
                            key={category.id}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer select-none transition-all duration-200 ${
                                selectCategory === category.value
                                    ? 'bg-black'
                                    : 'hover:bg-gray-50'
                            }`}
                        >
                            <input
                                type='radio'
                                name='category'
                                value={category.value}
                                checked={selectCategory === category.value}
                                onChange={(e) => setSelectCategory(e.target.value)}
                                className="sr-only"
                            />
                            <span
                                className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                    selectCategory === category.value
                                        ? 'border-white'
                                        : 'border-gray-300 bg-white'
                                }`}
                            >
                                {selectCategory === category.value && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                                )}
                            </span>
                            <span
                                className={`text-[12.5px] font-semibold leading-none transition-colors duration-200 ${
                                    selectCategory === category.value ? 'text-white' : 'text-gray-600'
                                }`}
                            >
                                {category.label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* ── Clear Button ────────────────────────────────────────── */}
            <div className="px-5 py-4">
                <button
                    onClick={handleClear}
                    className="w-full py-2.5 rounded-xl bg-black text-white text-[10px] font-black tracking-[0.18em] uppercase hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                >
                    Clear All Filters
                </button>
            </div>
        </div>
    )
}