// PromoCards.jsx
const promos = [
  {
    id: 1,
    eyebrow: "Daily Essentials",
    title: "Everyday Comfort",
    subtitle: "Built for the woman who is always on the move. Cushioning that keeps up with your hustle.",
    cta: "Shop Casual",
    align: "left",
    bg: "bg-gray-50",
    textColor: "text-black",
    subColor: "text-black",
    btnClass: "bg-black text-white hover:bg-gray-700",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=85",
    imgAlt: "Everyday comfort shoe",
    imgSide: "right",
  },
  {
    id: 2,
    eyebrow: "Performance Series",
    title: "Workout Ready",
    subtitle: "Engineered for performance. Zero compromise on style or speed when it counts most.",
    cta: "Shop Sports",
    align: "right",
    bg: "bg-black",
    textColor: "text-white",
    subColor: "text-gray-400",
    btnClass: "bg-white text-gray-900 hover:bg-gray-100",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=85",
    imgAlt: "Workout shoe",
    imgSide: "left",
  },
];

function PromoCard({ promo }) {
  const isImageLeft = promo.imgSide === "left";
  return (
    <div className={`w-full ${promo.bg} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isImageLeft ? "md:flex-row-reverse" : "md:flex-row"} items-stretch min-h-0 md:min-h-[340px]`}>

          {/* Text side */}
          <div className="flex-1 flex flex-col justify-center py-10 sm:py-12 md:py-16 md:pr-12 lg:pr-20 text-center md:text-left items-center md:items-start">
            <span className={`text-xs font-bold uppercase tracking-[0.2em] ${promo.subColor} mb-3`}>
              {promo.eyebrow}
            </span>
            <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight ${promo.textColor} mb-4`}>
              {promo.title}
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${promo.subColor} mb-6 sm:mb-8 max-w-md`}>
              {promo.subtitle}
            </p>
            <div>
              <button
                className={`bg-black inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 transition-colors ${promo.btnClass}`}
              >
                {promo.cta}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image side */}
          <div className={`relative flex-1 flex items-end justify-center overflow-hidden ${isImageLeft ? "md:pr-12" : "md:pl-12"} min-h-[220px] sm:min-h-[280px] md:min-h-0`}>
            {/* Tonal circle accent */}
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none`}>
              <div className={`w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full ${promo.bg === "bg-black" ? "bg-white/5" : "bg-gray-100"}`} />
            </div>
            <img
              src={promo.img}
              alt={promo.imgAlt}
              className="relative z-10 h-[180px] sm:h-[230px] md:h-[280px] w-auto object-contain drop-shadow-2xl"
              style={{
                transform: isImageLeft ? "rotate(8deg) translateY(20px)" : "rotate(-6deg) translateY(20px)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PromoCards() {
  return (
    <section className="w-full">
      {promos.map((promo) => (
        <PromoCard key={promo.id} promo={promo} />
      ))}
    </section>
  );
}