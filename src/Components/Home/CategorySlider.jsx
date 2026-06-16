import React from 'react'
import running from "../../assets/images/running.jpg";
import casual from "../../assets/images/casual.jpg";
import sports from "../../assets/images/sports.jpg";
import gym from "../../assets/images/gym.jpg";
import sneakers from "../../assets/images/sneakers.jpg";
import formal from "../../assets/images/formal.jpg";
import sandals from "../../assets/images/sandals.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Grid2x2 } from "lucide-react";


export default function CategorySlider() {
    const categories = [
        {
            id: 1,
            name: "Running",
            image: running,
        },
        {
            id: 2,
            name: "Casual",
            image: casual,
        },
        {
            id: 3,
            name: "Sports",
            image: sports,
        },
        {
            id: 4,
            name: "Gym",
            image: gym,
        },
        {
            id: 5,
            name: "Sneakers",
            image: sneakers,
        },
        {
            id: 6,
            name: "Formal",
            image: formal,
        },
        {
            id: 7,
            name: "Sandals",
            image: sandals,
        }
    ];
    return (
        <>
            <div className="max-w-7xl mx-auto -mt-12 mb-10 relative z-20">

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <Swiper
                        spaceBetween={20}
                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                            },
                            480: {
                                slidesPerView: 4,
                            },
                            640: {
                                slidesPerView: 5,
                            },
                            768: {
                                slidesPerView: 6,
                            },
                            1024: {
                                slidesPerView: 7,
                            },
                            1280: {
                                slidesPerView: 7,
                            },
                        }}
                    >
                        {categories.map((item) => (
                            <SwiperSlide key={item.id}>

                                <div className="flex flex-col items-center cursor-pointer group">

                                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-black">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-10 h-10 object-contain"
                                        />

                                    </div>

                                    <p className="mt-3 text-sm font-medium">
                                        {item.name}
                                    </p>

                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

            </div>
        </>
    )
}
