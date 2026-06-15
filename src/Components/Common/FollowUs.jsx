import React from "react";
import instagramLogo from "../../assets/images/instagram-logo.png";

import img1 from "../../assets/images/follow-1.jpg";
import img2 from "../../assets/images/follow-2.jpg";
import img3 from "../../assets/images/follow-3.jpg";
import img4 from "../../assets/images/follow-4.jpg";
import img5 from "../../assets/images/follow-5.jpg";
import img6 from "../../assets/images/follow-6.jpg";

export default function FollowUs() {
    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">

            {/* Heading */}
            <div className="mb-10 text-center lg:text-left">
                <h2 className="text-4xl font-bold">
                    Follow Us @SoleHub
                </h2>
                <p className="text-gray-500 mt-2">
                    Shop our latest looks and tag us to get featured.
                </p>
            </div>

            {/* Single Unified Grid — all breakpoints */}
            {/*
                Breakpoint logic:
                  default  → 2 cols  (mobile)
                  md       → 3 cols  (tablet)
                  xl       → 6 cols  (desktop — all 6 images in one row)

                Instagram card col-span mirrors the grid columns:
                  col-span-2  →  md:col-span-3  →  xl:col-span-6
            */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">

                {/* Images */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                    >
                        <img
                            src={image}
                            alt={`Instagram post ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}

                {/* Instagram Card — always spans full row width */}
                <div className="col-span-2 md:col-span-3 xl:col-span-6 bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-center gap-4 hover:shadow-lg transition-shadow duration-300">
                    <img
                        src={instagramLogo}
                        alt="Instagram"
                        className="w-14 h-14 object-contain flex-shrink-0"
                    />
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold leading-tight">
                            Follow on Instagram
                        </h3>
                        <p className="text-gray-500 mt-1">
                            @solehub_official
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}