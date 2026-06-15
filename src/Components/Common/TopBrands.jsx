import React from "react";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import nike from "../../assets/images/nike-logo.webp";
import adidas from "../../assets/images/adidas-logo.png";
import puma from "../../assets/images/puma-logo.webp";
import reebok from "../../assets/images/reebok-logo.webp";
import newbalance from "../../assets/images/newbalance-logo.png";
import asics from "../../assets/images/asics.png";

export default function TopBrands() {
    const brands = [
        { id: 1, image: nike, name: "Nike" },
        { id: 2, image: adidas, name: "Adidas" },
        { id: 3, image: puma, name: "Puma" },
        { id: 4, image: reebok, name: "Reebok" },
        { id: 5, image: newbalance, name: "New Balance" },
        { id: 6, image: asics, name: "Asics" },
        { id: 7, image: nike },
        { id: 8, image: adidas },
        { id: 9, image: puma },
        { id: 10, image: reebok },
        { id: 11, image: newbalance },
        { id: 12, image: asics },
    ];
    const allBrands = [...brands, ...brands, ...brands];

    return (
        <section className="max-w-7xl mx-auto px-4 py-14">

            <h2 className="bg-gray-50 rounded-3xl p-8 text-4xl font-bold mb-4 text-center">
                Top Brands. Trusted Quality.
            </h2>
            <p className="text-center text-gray-500 mb-10 text-lg ">
                Trusted by millions of customers worldwide.
            </p>


            <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={4000}
                allowTouchMove={false}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 50,
                    },
                }}
            >
                {allBrands.map((brand, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center w-full h-auto">
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="max-w-[140px] max-h-[60px] object-contain..."
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}