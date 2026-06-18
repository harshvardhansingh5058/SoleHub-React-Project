import React, { useState } from 'react'
import ProductGrid from './ProductGrid';
import { products } from '../Common/ProductData'
import FilterSlidebar from './FilterSlidebar';
import ShopToolbar from './ShopToolbar'
import { SlidersHorizontal, X } from 'lucide-react'

export default function ShopMen() {
    const [selectBrand, setSelectBrand] = useState("")
    const [selectCategory, setSelectCategory] = useState("")
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const filterbrand = products.filter((product) => {
        const brandMatch = selectBrand === "" ? true : product.brand.toLowerCase() ===
            selectBrand.toLowerCase();

        const categoryMatch = selectCategory === "" ? true : product.category.toLowerCase() === selectCategory.toLowerCase();

        const searchMatch = searchTerm === "" ? true : product.name.toLowerCase().includes(searchTerm.toLowerCase());

        return brandMatch && categoryMatch && searchMatch
    })

    // console.log(sortBy);

    const dynamicBrands = products.map((product) => product.brand)
    const uniqueBrands = [...new Set(dynamicBrands)]
    const brands = [
        {
            id: 0,
            label: "All Brands",
            value: ""
        },
        ...uniqueBrands.map((brand, index) => ({
            id: index + 1,
            label: brand,
            value: brand.toLowerCase()
        }))
    ];

    const dynamicCategories = products.map((product) => product.category)
    const uniqueCategories = [...new Set(dynamicCategories)]
    const categories = [
        {
            id: 0,
            label: "All Categories",
            value: ""
        },
        ...uniqueCategories.map((category, index) => ({
            id: index + 1,
            label: category,
            value: category.toLowerCase()
        }))
    ];

    const sortby = [...filterbrand]
    if (sortBy === "low-high") {
        sortby.sort((a, b) => a.price - b.price);
    }
    if (sortBy === "high-low") {
        sortby.sort((a, b) => b.price - a.price);
    }
    if (sortBy === "rating") {
        sortby.sort((a, b) => b.rating - a.rating);
    }

    const filterProps = {
        brand: brands,
        categories,
        selectBrand,
        setSelectBrand,
        selectCategory,
        setSelectCategory,
        setSearchTerm,
        setSortBy,
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* ── Page Header ────────────────────────────────────────── */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6 flex items-end justify-between">
                    <div>
                        <p className="text-[9px] font-black tracking-[0.32em] text-gray-400 uppercase mb-0.5">
                            SoleHub
                        </p>
                        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 uppercase">
                            Men's Collection
                        </h1>
                    </div>

                    {/* Mobile filter toggle — only shown below lg */}
                    <button
                        onClick={() => setMobileFiltersOpen(true)}
                        className="lg:hidden inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-[11px] font-black tracking-wider uppercase hover:bg-zinc-800 active:scale-[0.97] transition-all duration-200"
                    >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        Filters
                    </button>
                </div>
            </div>

            {/* ── Main Layout ────────────────────────────────────────── */}
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <div className="flex gap-6 lg:gap-8">

                    {/* Desktop Sidebar — sticky, hidden below lg */}
                    <aside className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
                        <div className="sticky top-8">
                            <FilterSlidebar {...filterProps} />
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        <ShopToolbar
                            totalProducts={filterbrand.length}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />
                        <ProductGrid products={sortby} />
                    </main>
                </div>
            </div>

            {/* ── Mobile Filter Drawer ────────────────────────────────── */}
            {mobileFiltersOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">

                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setMobileFiltersOpen(false)}
                    />

                    {/* Slide-in panel */}
                    <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-gray-50 flex flex-col overflow-hidden">

                        {/* Drawer header */}
                        <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-gray-200 flex-shrink-0">
                            <p className="text-[10px] font-black tracking-[0.22em] uppercase text-gray-900">
                                Filters
                            </p>
                            <button
                                onClick={() => setMobileFiltersOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                            >
                                <X className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>

                        {/* Scrollable filter content */}
                        <div className="flex-1 overflow-y-auto p-4">
                            <FilterSlidebar {...filterProps} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}