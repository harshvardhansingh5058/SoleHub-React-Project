// NotFound.jsx
// 404 page — matches SoleHub's dark luxury theme (pure black, FontAwesome icons,
// bold uppercase tracked labels, tonal accents). UI only, no logic dependencies.

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 sm:px-6">
      {/* Tonal circle accent, consistent with product pages */}
      <div className="absolute w-[480px] h-[480px] sm:w-[640px] sm:h-[640px] rounded-full bg-zinc-900/60 pointer-events-none" />

      {/* Dashed "off track" curve — signature element */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M -50 480 Q 250 380 500 420 T 1050 280"
          fill="none"
          stroke="#3f3f46"
          strokeWidth="2"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 max-w-xl w-full text-center">
        {/* Eyebrow */}
        <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-amber-400 mb-4 sm:mb-6">
          Wrong Turn
        </p>

        {/* 404 numeral */}
        <h1 className="text-[6rem] sm:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-white leading-none select-none">
          404
        </h1>

        {/* Footprint, pointing off-path */}
        <div className="flex justify-center -mt-2 sm:-mt-4 mb-6 sm:mb-8">
          <i
            className="fa-solid fa-shoe-prints text-zinc-600 text-xl sm:text-2xl rotate-[18deg]"
            aria-hidden="true"
          />
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3">
          This page didn't make the cut.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-10 sm:mb-12 max-w-sm mx-auto">
          The page you're looking for has been retired, moved, or never existed.
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto bg-white hover:bg-zinc-200 transition-colors text-black text-xs sm:text-sm font-black uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-house text-xs" aria-hidden="true" />
            Back To Home
          </Link>
          <Link
            to="/men"
            className="w-full sm:w-auto bg-transparent hover:bg-zinc-900 transition-colors text-white text-xs sm:text-sm font-black uppercase tracking-widest px-8 py-4 border border-zinc-700 hover:border-zinc-500 flex items-center justify-center gap-2"
          >
            Shop Now
            <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}