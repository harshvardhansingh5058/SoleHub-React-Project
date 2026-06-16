import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Star } from "lucide-react";

import user1 from "../../assets/images/user-1.jpg";
import user2 from "../../assets/images/user-2.jpg";
import user3 from "../../assets/images/user-3.jpg";
import user4 from "../../assets/images/user-4.jpg";
import user5 from "../../assets/images/user-5.jpg";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            image: user1,
            name: "Rohit Sharma",
            review:
                "Best collection and amazing comfort! SoleHub is my go-to store for shoes.",
            rating: 5,
        },
        {
            id: 2,
            image: user2,
            name: "Ananya Verma",
            review:
                "Stylish, perfect fit and fast delivery. Highly recommended!",
            rating: 4,
        },
        {
            id: 3,
            image: user3,
            name: "Karan Mehta",
            review:
                "Great quality and premium brands at the best prices.",
            rating: 5,
        },
        {
            id: 4,
            image: user4,
            name: "Priya Singh",
            review:
                "The shopping experience was smooth and the shoes exceeded my expectations.",
            rating: 3,
        },
        {
            id: 5,
            image: user5,
            name: "Amit Patel",
            review:
                "Fast shipping and authentic products. Will definitely shop again.",
            rating: 4,
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-20 bg-gradient-to-b from-white to-gray-50 rounded-[40px]">

            <div className="text-center mb-14">
                <span className="text-sm uppercase tracking-[4px] text-gray-500">
                    Testimonials
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                    What Our Customers Say
                </h2>

                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    Trusted by thousands of happy customers who love our quality,
                    comfort and premium service.
                </p>
            </div>

            <Swiper
            className="pb-14"
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                spaceBetween={24}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },

                    640: {
                        slidesPerView: 2,
                    },

                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>

                        <div className="bg-white border border-gray-100 rounded-[28px] p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group h-full mb-12">

                            <div className="flex items-center gap-4 ">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                                />

                                <div>

                                    <h3 className="font-semibold text-lg">
                                        {item.name}
                                    </h3>

                                    <div className="flex mt-1">

                                        {[...Array(item.rating)].map((_, index) => (
                                            <Star
                                                key={index}
                                                size={16}
                                                className="fill-yellow-400 text-yellow-400"
                                            />
                                        ))}

                                    </div>

                                </div>

                            </div>

                            <p className="text-gray-600 leading-7 italic mt-5 flex-1">
                                {item.review}
                            </p>

                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}