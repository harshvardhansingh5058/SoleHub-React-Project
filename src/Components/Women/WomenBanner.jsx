// WomenBanner.jsx
export default function WomenBanner() {
  return (
    <section className="w-full bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-0 lg:min-h-[480px] overflow-hidden py-10 lg:py-0">

          {/* ── Left: Text ── */}
          <div className="relative z-10 flex-1 w-full max-w-xl py-6 lg:py-16 text-center lg:text-left">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
              New Season · Women's Collection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] lg:leading-[1.0] tracking-tight text-black mb-2">
              Step into
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] lg:leading-[1.0] tracking-tight text-black mb-6">
              Elegance
            </h1>
            <p className="text-base sm:text-lg text-black leading-relaxed mb-8 lg:mb-10 max-w-sm mx-auto lg:mx-0">
              Shoes that complement your every move. Designed for the woman who never slows down.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <button className="w-full sm:w-auto bg-black hover:bg-gray-700 transition-colors text-white text-sm font-bold px-8 py-4 rounded-none tracking-wider uppercase">
                Shop Now
              </button>
              <button className="group flex items-center gap-2 text-sm font-semibold text-black uppercase tracking-wider border-b border-gray-900 pb-0.5 hover:border-gray-400 hover:text-gray-400 transition-all">
                New Arrivals
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Stats row */}
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 mt-10 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-200">
              {[
                { value: "2,400+", label: "Styles" },
                { value: "50+", label: "Brands" },
                { value: "4.8★", label: "Avg Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-lg sm:text-xl font-black text-gray-900">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Hero image ── */}
          <div className="relative flex-1 w-full flex items-end justify-center h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[480px] pointer-events-none select-none">
            {/* Large tonal circle behind shoe */}
            <div className="absolute right-1/2 translate-x-1/2 lg:right-0 lg:translate-x-0 top-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full bg-gray-100" />
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=85"
              alt="Women's featured shoe"
              className="relative z-10 h-[220px] sm:h-[300px] lg:h-[400px] w-auto object-contain drop-shadow-2xl"
              style={{ transform: "rotate(-6deg) translateY(20px)" }}
            />
          </div>

          {/* Decorative vertical text */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold tracking-[0.4em] uppercase text-gray-200 select-none pointer-events-none">
            Women's Collection 2025
          </div>
        </div>
      </div>
    </section>
  );
}