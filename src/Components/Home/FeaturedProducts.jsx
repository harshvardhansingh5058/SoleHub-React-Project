import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../Common/ProductCard";
import { products } from "../Common/ProductData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedProducts() {
    const featuredProducts = products.slice(0, 10);

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Featured Picks</h2>

                <button className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
                    View All
                </button>
            </div>

            <div className="relative">

                <button className="custom-prev hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200">
                    <ChevronLeft size={18} />
                </button>

                <button className="custom-next hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200">
                    <ChevronRight size={18} />
                </button>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 12,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 24,
                        },
                    }}
                >
                    {featuredProducts.map((product, index) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard
                                product={product}
                                index={index}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}