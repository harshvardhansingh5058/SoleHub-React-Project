import React from 'react'
import banner1 from "../../assets/images/banner-1.webp";
import banner2 from "../../assets/images/banner-2.webp";
import banner3 from "../../assets/images/banner-3.webp";
import banner4 from "../../assets/images/banner-4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Banner() {
    const banners = [banner1, banner2, banner3, banner4];
    return (
        <>
            <div className="w-full h-fit bg-gray-200 items-center justify-center">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {banners.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`Banner ${index + 1}`}
                                className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[550px] object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
