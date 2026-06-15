import React from "react";
import newsletterImg from "../../assets/images/newsletter-shoes.png";

export default function StayUp() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-12">

      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-black via-zinc-900 to-black">

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-8 py-10 lg:px-12 lg:py-12">

          {/* Left Content */}
          <div className="max-w-xl">

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Stay Updated.
              <br />
              Never Miss Out.
            </h2>

            <p className="text-gray-300 mt-4 leading-7">
              Subscribe to get special offers, new arrivals and exclusive
              sneaker drops delivered straight to your inbox.
            </p>

            <form className="mt-8 flex flex-col sm:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-14 px-5 rounded-xl bg-white text-black outline-none"
              />

              <button
                type="submit"
                className="h-14 px-8 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                Subscribe
              </button>

            </form>

          </div>

          {/* Right Image */}

          <div className="flex justify-center lg:justify-end">

            <img
              src={newsletterImg}
              alt="Sneakers"
              className="w-[260px] sm:w-[340px] lg:w-[430px] object-contain hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
