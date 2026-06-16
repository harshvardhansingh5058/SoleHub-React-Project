import React from "react";
import newsletterImg from "../../assets/images/newsletter-shoes.png";

export default function StayUp() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-12">

      <div
        className="relative overflow-hidden rounded-[32px] min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]"
        style={{
          backgroundImage: `url(${newsletterImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30 lg:to-black/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-md lg:max-w-xl">
            Stay Updated.
            <br />
            Never Miss Out.
          </h2>

          <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md">
            Subscribe to get special offers, new arrivals and exclusive
            sneaker drops delivered straight to your inbox.
          </p>

          {/* Form — fixed: w-full on both elements for mobile */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-3 w-full max-w-sm sm:max-w-md">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 h-12 sm:h-14 px-4 rounded-xl bg-white/90 text-black placeholder-gray-400 outline-none text-sm sm:text-base focus:bg-white transition"
            />

            <button
              type="button"
              className="w-full sm:w-auto h-12 sm:h-14 px-7 rounded-xl bg-white text-black font-semibold text-sm sm:text-base hover:bg-gray-100 active:scale-95 transition duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}