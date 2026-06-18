import React from "react";

const ContactBanner = () => {
  return (
    <section
      aria-label="Contact us hero banner"
      className="
        relative w-full overflow-hidden
        
        bg-zinc-950
        min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[540px]
        flex items-center
      "
    >

      {/* ── Background photo layer ──────────────────────────────────────── */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&q=90&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-right"
          loading="lazy"
        />

        {/* Dense left-to-right fade — keeps heading crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/10" />

        {/* Subtle top/bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950/70" />

        {/* Very light global darkening so the photo reads as luxury, not harsh */}
        <div className="absolute inset-0 bg-zinc-950/20" />
      </div>

      {/* ── Decorative edge accent (left) ──────────────────────────────── */}
      <div
        aria-hidden="true"
        className="
          absolute left-0 top-8 bottom-8
          w-px
          bg-gradient-to-b from-transparent via-white/12 to-transparent
          hidden lg:block
        "
      />

      {/* ── Decorative concentric rings (right side) ─────────────────── */}
      <div
        aria-hidden="true"
        className="
          absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3
          w-[420px] h-[420px] rounded-full
          border border-white/[0.06]
          hidden md:block
        "
      />
      <div
        aria-hidden="true"
        className="
          absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3
          w-[280px] h-[280px] rounded-full
          border border-white/[0.05]
          hidden md:block
        "
      />

      {/* ── Foreground content ─────────────────────────────────────────── */}
      <div className="
        relative z-10 w-full
        px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24
        py-14 md:py-22 lg:py-28
      ">
        <div className="max-w-[500px] xl:max-w-[580px]">

          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-7 md:mb-9">
            <span className="block h-px w-8 bg-white/20 flex-shrink-0" />
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.38em] uppercase text-white/30 leading-none">
              Customer Support
            </p>
          </div>

          {/* ── Main heading ── */}
          <h2
            className="
              font-black text-white
              leading-[0.95] tracking-tighter
              text-[2.6rem] sm:text-[3.4rem] md:text-[3.8rem] lg:text-[4.4rem] xl:text-[5rem]
              mb-7 md:mb-9
            "
          >
            We'd Love To
            <br />
            Hear From You
          </h2>

          {/* Thin rule — acts as a typographic spacer */}
          <div className="w-10 h-px bg-white/12 mb-6 md:mb-8" />

          {/* Supporting text */}
          <p className="
            text-zinc-400/90
            text-sm sm:text-base md:text-[1.0625rem]
            font-light leading-relaxed tracking-wide
            max-w-[260px] sm:max-w-xs md:max-w-sm
          ">
            Have a question or need help?
            <br />
            We're here for you.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ContactBanner;