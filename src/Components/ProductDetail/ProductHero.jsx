// ProductHero.jsx
// UI only — dummy data via props, no API/backend calls.
// Design language matches SoleHub: black/white/zinc/gray, sharp corners on
// primary CTAs, bold uppercase tracked labels, tonal circle accents.

import { useState } from "react";

const defaultProduct = {
  brand: "Nike",
  title: "Air Zoom Pegasus 41",
  rating: 4.6,
  reviewCount: 482,
  price: 9499,
  originalPrice: 12999,
  description:
    "Responsive cushioning meets a breathable engineered mesh upper, built for daily training and everyday wear. Tuned for runners who refuse to slow down.",
  sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
  images: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=85",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900&q=85",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&q=85",
    "https://images.unsplash.com/photo-1584735175315-9d5df23be620?w=900&q=85",
  ],
};

function formatINR(n) {
  return `₹${n.toLocaleString("en-IN")}`;
}

function StarRating({ rating }) {
  const stars = [0, 1, 2, 3, 4];
  return (
    <div className="flex items-center gap-0.5">
      {stars.map((i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <svg key={i} viewBox="0 0 20 20" className="w-4 h-4">
            {half && (
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="#111827" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
            )}
            <path
              d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85L10 1.5z"
              fill={half ? `url(#half-${i})` : filled ? "#111827" : "none"}
              stroke="#111827"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function ProductHero({ product = defaultProduct }) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* ══════════════ Left: Gallery (60%) ══════════════ */}
          <div className="w-full lg:w-[60%]">
            {/* Main image */}
            <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
              {/* Tonal circle accent, consistent with rest of site */}
              <div className="absolute w-[70%] h-[70%] rounded-full bg-gray-100 pointer-events-none" />
              <img
                key={activeImage}
                src={product.images[activeImage]}
                alt={`${product.brand} ${product.title}`}
                className="relative z-10 w-full h-full object-contain p-8 sm:p-10 lg:p-14"
              />

              {discount > 0 && (
                <span className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-black text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 z-20">
                  {discount}% Off
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-5 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  aria-label={`View image ${idx + 1}`}
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 border overflow-hidden transition-colors ${
                    activeImage === idx
                      ? "border-black"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ══════════════ Right: Details (40%) ══════════════ */}
          <div className="w-full lg:w-[40%]">
            {/* Brand */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              {product.brand}
            </span>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight mt-2 mb-3">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <StarRating rating={product.rating} />
              <span className="text-sm font-bold text-gray-900">
                {product.rating}
              </span>
              <span className="text-sm text-gray-400">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price block */}
            <div className="flex items-center flex-wrap gap-3 mb-6">
              <span className="text-3xl font-black text-gray-900 tracking-tight">
                {formatINR(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-base text-gray-400 line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
              {discount > 0 && (
                <span className="text-xs font-bold uppercase tracking-widest text-white bg-gray-900 px-2.5 py-1">
                  Save {discount}%
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Size selector */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                  Select Size
                </span>
                <button className="text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-900 transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[56px] px-4 py-3 text-sm font-bold border transition-colors ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-900 border-gray-200 hover:border-gray-900"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-900 block mb-3">
                Quantity
              </span>
              <div className="inline-flex items-center border border-gray-200">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-10 h-11 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors text-lg font-bold"
                >
                  −
                </button>
                <span className="w-12 h-11 flex items-center justify-center text-sm font-bold text-gray-900 border-x border-gray-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  aria-label="Increase quantity"
                  className="w-10 h-11 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <div className="flex items-stretch gap-3">
                <button className="flex-1 bg-black hover:bg-gray-800 transition-colors text-white text-sm font-black uppercase tracking-widest py-4">
                  Add to Cart
                </button>
                <button
                  onClick={() => setWishlisted((w) => !w)}
                  aria-label="Add to wishlist"
                  aria-pressed={wishlisted}
                  className={`w-14 flex items-center justify-center border transition-colors ${
                    wishlisted
                      ? "border-black bg-black"
                      : "border-gray-200 hover:border-gray-900"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill={wishlisted ? "#ffffff" : "none"}
                    stroke={wishlisted ? "#ffffff" : "#111827"}
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s-7.5-4.6-10-9.2C.3 8.1 2 4.5 5.6 4c2-.3 3.9.7 4.9 2.4C11.5 4.7 13.4 3.7 15.4 4c3.6.5 5.3 4.1 3.6 7.8C19.5 16.4 12 21 12 21z"
                    />
                  </svg>
                </button>
              </div>
              <button className="w-full bg-white hover:bg-gray-50 transition-colors text-gray-900 text-sm font-black uppercase tracking-widest py-4 border border-gray-900">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}