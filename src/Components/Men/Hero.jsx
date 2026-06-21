import React from "react";
import Heroimg from "../../assets/images/banner-4.png";

export default function Hero() {
  return (
    <section className="w-full mx-auto ">

      <div
        className="relative overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[490px]"
        style={{
          backgroundImage: `url(${Heroimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* Dark gradient — heavy left for text, fades to transparent right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.30) 65%, rgba(0,0,0,0.05) 100%)",
          }}
        />

        {/* Text overlay — left side only, never exceeds 52% width */}
        <div className="relative z-10 flex flex-col justify-center h-full px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 max-w-[88%] sm:max-w-[58%] lg:max-w-[52%]">

          <h1
            className="font-black text-white leading-[1.03] tracking-tight"
            style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.5rem)" }}
          >
            Men's
            <br />
            Collection
          </h1>

          <p className="text-zinc-300 text-[0.78rem] sm:text-sm mt-3 sm:mt-4 leading-relaxed">
            Built for performance.
            <br />
            Styled for every step.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-5 sm:mt-6">

            {/* Primary */}
            <button
              type="button"
              className="inline-flex items-center gap-1.5 bg-white text-zinc-900 font-semibold text-[0.78rem] sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-zinc-100 active:scale-95 transition-all duration-150"
            >
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Secondary */}
            <button
              type="button"
              className="inline-flex items-center border border-zinc-400 text-white font-medium text-[0.78rem] sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg hover:bg-white/10 active:scale-95 transition-all duration-150"
            >
              View Bestsellers
            </button>

          </div>
        </div>

      </div>

    </section>
  );
}

