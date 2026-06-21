import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../Common/ProductCard"

function RelatedProducts({ products = [] }) {
    const items = products.slice(0, 4);

    if (items.length === 0) return null;

    return (
        <section className="bg-black py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="flex items-center gap-2.5 mb-8 sm:mb-10">
                    <FontAwesomeIcon
                        icon={faShapes}
                        className="text-amber-400 text-sm"
                    />
                    <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                        You May Also Like
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                    {items.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default RelatedProducts;