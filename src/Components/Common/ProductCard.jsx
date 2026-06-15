import React from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";


export default function ProductCard({ product }) {
  return (
    <div className="h-[430px] flex flex-col bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Badge + Wishlist */}
      <div className="flex items-center justify-between">
        <span
          className={`text-[10px] sm:text-xs px-2 py-1 rounded-md font-medium ${
            product.badge === "Best Seller"
              ? "bg-orange-100 text-orange-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {product.badge}
        </span>

        <button>
          <Heart
            size={18}
            className="text-gray-400 hover:text-red-500 transition cursor-pointer"
          />
        </button>
      </div>

      {/* Product Image */}
      <div className="h-40 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
         className="h-32 object-contain"
        />
      </div>

      {/* Product Name */}
      <h3 className="font-semibold text-lg h-14 line-clamp-2">
        {product.name}
      </h3>

      {/* Category */}
      <p className="text-sm text-gray-500 h-6">
        {product.category}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-2">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={14}
              fill="currentColor"
              strokeWidth={0}
            />
          ))}
        </div>

        <span className="text-xs text-gray-500">
          {product.rating} ({product.reviews})
        </span>
      </div>

      {/* Price */}
      <div className="h-8 flex items-center gap-2 mt-4">
        <span className="text-lg font-bold text-black">
          ₹{product.price.toLocaleString()}
        </span>

        <span className="text-sm text-gray-400 line-through">
          ₹{product.oldPrice.toLocaleString()}
        </span>

        <span className="text-xs font-semibold text-orange-500">
          {product.discount}
        </span>
      </div>

      {/* Add To Cart */}
      <button className="mt-auto w-full bg-black text-white py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
        <ShoppingCart size={16} />
        Add to Cart
      </button>
    </div>
  );
}