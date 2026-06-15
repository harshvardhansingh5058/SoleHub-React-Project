import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from './ProductCard';
import nikePegasus from "../../assets/images/nikePregasus.png";
import adidasUltra from "../../assets/images/adidasUltraboost.png";
import pumaRSX from "../../assets/images/pumaRs.png";
import reebokNano from "../../assets/images/Reebok Nano X3.png";
import newBalance from "../../assets/images/New Balance 880v13.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedProducts() {

    const products = [
        { id: 1, badge: "New", name: "Nike Air Zoom Pegasus 40", category: "Men's Running Shoes", image: nikePegasus, rating: 4.5, reviews: 120, price: 7999, oldPrice: 9999, discount: "20% OFF", brand: "Nike", isFavourite: false },
        { id: 2, badge: "New", name: "Adidas Ultraboost 23", category: "Men's Running Shoes", image: adidasUltra, rating: 4.7, reviews: 890, price: 10999, oldPrice: 12999, discount: "15% OFF", brand: "Adidas", isFavourite: false },
        { id: 3, badge: "New", name: "Puma RS-X Bold", category: "Unisex Sneakers", image: pumaRSX, rating: 4.3, reviews: 645, price: 6499, oldPrice: 8499, discount: "24% OFF", brand: "Puma", isFavourite: false },
        { id: 4, badge: "Best Seller", name: "Reebok Nano X3", category: "Men's Training Shoes", image: reebokNano, rating: 4.6, reviews: 730, price: 7499, oldPrice: 9499, discount: "21% OFF", brand: "Reebok", isFavourite: false },
        { id: 5, badge: "New", name: "New Balance 880v13", category: "Men's Running Shoes", image: newBalance, rating: 4.4, reviews: 510, price: 9999, oldPrice: 11999, discount: "17% OFF", brand: "New Balance", isFavourite: false },

        
        { id: 6, badge: "Trending", name: "Nike Revolution 7", category: "Men's Running Shoes", image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f", rating: 4.4, reviews: 385, price: 5999, oldPrice: 7499, discount: "20% OFF", brand: "Nike", isFavourite: false },
        { id: 7, badge: "Hot", name: "Adidas Supernova Rise", category: "Running Shoes", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77", rating: 4.8, reviews: 612, price: 8999, oldPrice: 10999, discount: "18% OFF", brand: "Adidas", isFavourite: false },
        { id: 8, badge: "New", name: "Puma Velocity Nitro 3", category: "Men's Running Shoes", image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329", rating: 4.6, reviews: 432, price: 7999, oldPrice: 9499, discount: "16% OFF", brand: "Puma", isFavourite: false },
        { id: 9, badge: "Best Seller", name: "Reebok Floatride Energy", category: "Training Shoes", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1", rating: 4.5, reviews: 521, price: 6999, oldPrice: 8499, discount: "18% OFF", brand: "Reebok", isFavourite: false },
        { id: 10, badge: "Limited", name: "New Balance Fresh Foam X", category: "Men's Running Shoes", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c", rating: 4.9, reviews: 978, price: 11999, oldPrice: 13999, discount: "14% OFF", brand: "New Balance", isFavourite: false },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            {/* Heading Row */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Featured Picks</h2>
                <button className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
                    View All
                </button>
            </div>

            {/* Slider */}
            <div className="relative">

                {/* Left Arrow — pushed outside cards with negative offset */}
                <button className="custom-prev hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-md border border-gray-200 items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200">
                    <ChevronLeft size={18} />
                </button>

                {/* Right Arrow */}
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
                        0: { slidesPerView: 1.2, spaceBetween: 12 },
                        480: { slidesPerView: 2, spaceBetween: 16 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 24 },
                        1280: { slidesPerView: 5, spaceBetween: 24 },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </section>
    );
}