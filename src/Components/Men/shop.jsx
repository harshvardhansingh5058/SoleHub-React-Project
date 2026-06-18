import React from "react";
import {
  Search, LayoutGrid, List, ChevronDown, Star,
  Heart, ShoppingBag, SlidersHorizontal,
} from "lucide-react";

// ─── Static Product Data ──────────────────────────────────────────────────────
const PRODUCTS = [
  { id: 1,  brand: "Nike",        name: "Air Max 270 React",     price: 7999,  original: 10999, rating: 4.8, reviews: 1248, badge: "Best Seller",  dark: true  },
  { id: 2,  brand: "Adidas",      name: "Ultraboost 23",         price: 10999, original: 13999, rating: 4.7, reviews: 893,  badge: "New Arrival",  dark: false },
  { id: 3,  brand: "Puma",        name: "RS-X Bold",             price: 6499,  original: 8499,  rating: 4.3, reviews: 456,  badge: "20% Off",      dark: false },
  { id: 4,  brand: "Nike",        name: "React Infinity Run",    price: 8999,  original: 11499, rating: 4.6, reviews: 712,  badge: null,           dark: true  },
  { id: 5,  brand: "Adidas",      name: "Stan Smith Parley",     price: 5999,  original: 7999,  rating: 4.5, reviews: 2107, badge: "Classic",      dark: false },
  { id: 6,  brand: "New Balance", name: "574 Core",              price: 5499,  original: 6999,  rating: 4.4, reviews: 334,  badge: null,           dark: false },
  { id: 7,  brand: "Reebok",      name: "Classic Leather",       price: 4999,  original: 6499,  rating: 4.2, reviews: 889,  badge: "Sale",         dark: false },
  { id: 8,  brand: "Puma",        name: "Suede Classic XXI",     price: 4499,  original: 5999,  rating: 4.1, reviews: 567,  badge: null,           dark: true  },
  { id: 9,  brand: "Nike",        name: "Air Force 1 '07",       price: 6999,  original: 8499,  rating: 4.9, reviews: 3421, badge: "Icon",         dark: false },
  { id: 10, brand: "Adidas",      name: "NMD R1 V2",             price: 9499,  original: 11999, rating: 4.5, reviews: 678,  badge: "Trending",     dark: true  },
  { id: 11, brand: "Reebok",      name: "Nano X3 Training",      price: 7499,  original: 9499,  rating: 4.6, reviews: 432,  badge: null,           dark: false },
  { id: 12, brand: "New Balance", name: "990v5 Made in USA",     price: 14999, original: 17999, rating: 4.8, reviews: 234,  badge: "Premium",      dark: false },
];



// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n) => "₹" + n.toLocaleString("en-IN");
const disc = (p, o) => Math.round((1 - p / o) * 100);

function Stars({ rating, size = "sm" }) {
  const w = size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`${w} ${s <= Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-gray-100 text-gray-200"}`}
        />
      ))}
    </div>
  );
}

function FilterHeading({ children }) {
  return (
    <p className="text-[10px] font-bold tracking-[0.12em] text-gray-400 uppercase mb-3">
      {children}
    </p>
  );
}

function FilterSection({ title, children, noBorder }) {
  return (
    <div className={`py-4 ${noBorder ? "" : "border-b border-gray-100"}`}>
      <FilterHeading>{title}</FilterHeading>
      {children}
    </div>
  );
}

function CheckItem({ label, checked, count }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group py-[5px]">
      <div
        className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border transition-all duration-150 ${
          checked ? "bg-black border-black" : "border-gray-300 group-hover:border-gray-500"
        }`}
      >
        {checked && (
          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 5L4 7.5 8.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className={`text-[13px] flex-1 transition-colors duration-150 ${checked ? "font-semibold text-gray-900" : "text-gray-600 group-hover:text-gray-900"}`}>
        {label}
      </span>
      {count && <span className="text-[11px] text-gray-400">{count}</span>}
    </label>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, index }) {
  const theme = CARD_THEMES[index % CARD_THEMES.length];
  const isDark = product.dark;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">

      {/* Image Area */}
      <div className={`relative bg-gradient-to-br ${theme} aspect-[4/3] overflow-hidden`}>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 text-[10px] font-bold tracking-wide px-2.5 py-[5px] rounded-full bg-black/90 text-white backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white hover:scale-110 transition-all duration-200">
          <Heart className="w-3.5 h-3.5 text-gray-600" />
        </button>

        {/* Shoe placeholder graphic */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ShoppingBag className={`w-14 h-14 ${isDark ? "text-white/10" : "text-black/8"}`} />
        </div>
        <div className={`absolute bottom-4 left-4 text-[9px] font-black tracking-[0.2em] uppercase ${isDark ? "text-white/15" : "text-black/10"}`}>
          {product.brand}
        </div>

        {/* Quick Add Slide-up */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button className="w-full py-2.5 bg-black/95 backdrop-blur-sm text-white text-[11px] font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors duration-200">
            Quick Add +
          </button>
        </div>

        {/* Discount pill */}
        <div className={`absolute bottom-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${isDark ? "bg-white/10 text-white" : "bg-black/8 text-gray-700"}`}>
          −{disc(product.price, product.original)}%
        </div>
      </div>

      {/* Info */}
      <div className="p-3.5">
        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-0.5">
          {product.brand}
        </p>
        <h3 className="text-[13.5px] font-semibold text-gray-900 leading-snug mb-1.5 line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-2.5">
          <Stars rating={product.rating} />
          <span className="text-[11px] text-gray-400 font-medium">
            {product.rating} <span className="text-gray-300">·</span> {product.reviews.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-black text-gray-900">{fmt(product.price)}</span>
            <span className="text-[11px] text-gray-400 line-through">{fmt(product.original)}</span>
          </div>
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
            {disc(product.price, product.original)}% off
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Shop Page ───────────────────────────────────────────────────────────
export default function Shop() {
  const colors = [
    { name: "Black",  hex: "#111111", selected: true  },
    { name: "White",  hex: "#ffffff", selected: false, outline: true },
    { name: "Red",    hex: "#ef4444", selected: false },
    { name: "Blue",   hex: "#3b82f6", selected: false },
    { name: "Green",  hex: "#22c55e", selected: false },
    { name: "Gray",   hex: "#9ca3af", selected: false },
  ];

  const sizes = [6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-5 xl:gap-7">

          {/* ══════════════ SIDEBAR ══════════════ */}
          <aside className="w-full lg:w-[270px] xl:w-[285px] flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:sticky lg:top-6 max-h-[calc(100vh-3rem)] overflow-y-auto scrollbar-hide">

              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-1">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-gray-800" strokeWidth={2.2} />
                  <span className="font-black text-gray-900 text-[15px] tracking-tight">Filters</span>
                </div>
                <button className="text-[11px] font-semibold text-gray-400 hover:text-black transition-colors duration-150">
                  Reset all
                </button>
              </div>

              {/* 1. Search */}
              <FilterSection title="Search">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search shoes..."
                    className="w-full pl-9 pr-3 py-2.5 text-[13px] bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-gray-400 focus:bg-white transition-all duration-200 placeholder:text-gray-400"
                    readOnly
                  />
                </div>
              </FilterSection>

              {/* 2. Category */}
              <FilterSection title="Category">
                {[["Running", "48"], ["Sneakers", "36"], ["Casual", "29"], ["Sports", "22"], ["Training", "18"], ["Lifestyle", "15"]].map(([c, n], i) => (
                  <CheckItem key={c} label={c} count={n} checked={i === 0} />
                ))}
              </FilterSection>

              {/* 3. Brand */}
              <FilterSection title="Brand">
                {[["Nike", "52"], ["Adidas", "41"], ["Puma", "28"], ["Reebok", "19"], ["New Balance", "24"]].map(([b, n], i) => (
                  <CheckItem key={b} label={b} count={n} checked={i < 2} />
                ))}
              </FilterSection>

              {/* 4. Gender */}
              <FilterSection title="Gender">
                <div className="flex gap-2 mt-0.5">
                  {["Men", "Women", "Unisex"].map((g, i) => (
                    <button
                      key={g}
                      className={`flex-1 py-2 text-[12px] font-semibold rounded-lg border transition-all duration-150 ${
                        i === 0
                          ? "bg-black text-white border-black"
                          : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </FilterSection>

              {/* 5. Price Range */}
              <FilterSection title="Price Range">
                <div className="px-1 mt-2 mb-1">
                  <div className="relative h-1 bg-gray-200 rounded-full my-5">
                    <div className="absolute left-[15%] right-[25%] h-full bg-black rounded-full" />
                    <div className="absolute left-[15%] -translate-x-1/2 -top-[7px] w-[15px] h-[15px] bg-black rounded-full ring-2 ring-white shadow" />
                    <div className="absolute right-[25%] translate-x-1/2 -top-[7px] w-[15px] h-[15px] bg-black rounded-full ring-2 ring-white shadow" />
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 mb-0.5">Min</p>
                    <p className="text-[12px] font-bold text-gray-800">₹1,999</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 mb-0.5">Max</p>
                    <p className="text-[12px] font-bold text-gray-800">₹9,999</p>
                  </div>
                </div>
              </FilterSection>

              {/* 6. Colors */}
              <FilterSection title="Color">
                <div className="flex flex-wrap gap-2.5 mt-1">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      title={c.name}
                      className={`w-7 h-7 rounded-full transition-all duration-200 hover:scale-110 ${
                        c.outline ? "border-2 border-gray-300" : ""
                      } ${c.selected ? "ring-2 ring-offset-2 ring-black scale-110" : ""}`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </FilterSection>

              {/* 7. Size */}
              <FilterSection title="Size (UK)">
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                  {sizes.map((s, i) => (
                    <button
                      key={s}
                      className={`w-9 h-9 text-[12px] font-semibold rounded-lg border transition-all duration-150 hover:border-gray-600 hover:text-gray-900 ${
                        i === 2 || i === 3
                          ? "bg-black text-white border-black"
                          : "bg-white text-gray-600 border-gray-200"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </FilterSection>

              {/* 8. Rating */}
              <FilterSection title="Rating">
                {[5, 4, 3].map((r) => (
                  <label key={r} className="flex items-center gap-2.5 cursor-pointer group py-[5px]">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-150 ${
                        r === 4
                          ? "border-black bg-black"
                          : "border-gray-300 group-hover:border-gray-600"
                      }`}
                    >
                      {r === 4 && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < r ? "fill-amber-400 text-amber-400" : "fill-gray-100 text-gray-200"}`}
                        />
                      ))}
                      <span className="text-[12px] text-gray-500">& above</span>
                    </div>
                  </label>
                ))}
              </FilterSection>

              {/* 9. Availability */}
              <FilterSection title="Availability">
                {[["In Stock", true], ["Out of Stock", false], ["Pre Order", false]].map(([label, checked]) => (
                  <CheckItem key={label} label={label} checked={checked} />
                ))}
              </FilterSection>

              {/* 10. Discount */}
              <FilterSection title="Discount">
                {[["10% and above", false], ["20% and above", true], ["30% and above", false], ["40% and above", false]].map(([label, checked]) => (
                  <CheckItem key={label} label={label} checked={checked} />
                ))}
              </FilterSection>

              {/* Clear Button */}
              <div className="pt-3">
                <button className="w-full py-2.5 border-2 border-gray-200 rounded-xl text-[13px] font-bold text-gray-500 hover:border-black hover:text-black hover:bg-gray-50 transition-all duration-200">
                  Clear All Filters
                </button>
              </div>
            </div>
          </aside>

          {/* ══════════════ MAIN CONTENT ══════════════ */}
          <main className="flex-1 min-w-0">

            {/* Toolbar */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-[18px] font-black text-gray-900 tracking-tight leading-none">All Shoes</h1>
                <p className="text-[12px] text-gray-400 font-medium mt-1">
                  Showing <span className="text-gray-700 font-semibold">1–12</span> of <span className="text-gray-700 font-semibold">120</span> products
                </p>
              </div>
              <div className="flex items-center gap-2.5">

                {/* Active filters */}
                <div className="hidden sm:flex items-center gap-1.5">
                  {["Nike", "20%+"].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 pl-2.5 pr-1.5 py-1 bg-gray-100 rounded-lg text-[11px] font-semibold text-gray-700">
                      {tag}
                      <button className="w-3.5 h-3.5 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors">
                        <span className="text-gray-600 text-[9px] font-black leading-none">×</span>
                      </button>
                    </span>
                  ))}
                </div>

                {/* Sort */}
                <div className="relative">
                  <select className="appearance-none pl-3.5 pr-8 py-2 text-[13px] font-semibold bg-gray-50 border border-gray-200 rounded-xl outline-none cursor-pointer text-gray-700 hover:border-gray-400 transition-colors duration-150">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Selling</option>
                    <option>Top Rated</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" strokeWidth={2.5} />
                </div>

                {/* View Toggle */}
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button className="p-2.5 bg-black text-white">
                    <LayoutGrid className="w-4 h-4" strokeWidth={2} />
                  </button>
                  <button className="p-2.5 text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                    <List className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
              {PRODUCTS.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {[1, 2, 3, "…", 10].map((p, i) => (
                <button
                  key={i}
                  className={`w-9 h-9 text-[13px] font-semibold rounded-xl border transition-all duration-150 ${
                    p === 1
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}