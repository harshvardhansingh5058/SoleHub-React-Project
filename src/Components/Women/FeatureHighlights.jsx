// FeatureHighlights.jsx
const features = [
  {
    id: 1,
    label: "Lightweight",
    desc: "Move with ease. Every gram is engineered to feel like nothing.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
        <path d="M20 10 C14 10 10 14 10 19 C10 23 12.5 26.5 16 28 L17 31 H23 L24 28 C27.5 26.5 30 23 30 19 C30 14 26 10 20 10Z" fill="#e5e7eb" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 14 V20" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 17 L20 20 L23 17" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Breathable",
    desc: "Stay fresh all day. Advanced mesh keeps air moving so you stay cool.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
        <path d="M10 20 Q14 13 20 20 Q26 27 30 20" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M10 26 Q14 19 20 26 Q26 33 30 26" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M10 14 Q14 7 20 14 Q26 21 30 14" stroke="#d1d5db" strokeWidth="1" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Flexible",
    desc: "For every step. Responsive soles that bend where you bend.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
        <path d="M10 26 C12 18 16 12 20 18 C24 24 28 14 30 10" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="10" cy="26" r="2.5" fill="#111827" />
        <circle cx="30" cy="10" r="2.5" fill="#111827" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Stylish",
    desc: "Look your best, always. Designed to turn heads while you get things done.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
        <polygon points="20,8 23,16 31,16 25,22 27,30 20,25 13,30 15,22 9,16 17,16" fill="#e5e7eb" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function FeatureHighlights() {
  return (
    <section className="w-full bg-black py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-10 lg:gap-y-0 divide-y divide-zinc-700 sm:divide-y-0 lg:divide-x lg:divide-zinc-700">
          {features.map((feature, idx) => (
            <div key={feature.id} className={`flex flex-col items-center text-center px-4 sm:px-6 lg:px-10 pt-6 sm:pt-0 first:pt-0`}>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2">
                {feature.label}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}