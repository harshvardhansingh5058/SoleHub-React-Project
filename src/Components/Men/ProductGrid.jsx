import React from "react";
import ProductCard from "../Common/ProductCard";

function ProductGrid({ products }) {

    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4 text-2xl">
                    👟
                </div>
                <h3 className="text-sm font-black tracking-tight text-gray-900 uppercase mb-1.5">
                    No products found
                </h3>
                <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                    Try adjusting your filters or search term to discover what you're looking for.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
            {products.map((product, index) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                />
            ))}
        </div>
    );
}

export default ProductGrid;