// ProductFeatures.jsx
// UI only — static dummy content, no API/backend.
// Design language matches SoleHub: black/white/gray palette, sharp corners,
// hand-drawn line icons in the same family as FeatureHighlights.jsx.

const features = [
  {
    id: 1,
    title: "100% Authentic",
    desc: "Every pair verified and sourced directly from authorized brands.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="20" cy="20" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
        <path d="M20 9 L26 12 V19 C26 24.5 23.5 28 20 30 C16.5 28 14 24.5 14 19 V12 Z" fill="#e5e7eb" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.5 19.5 L19 22 L24 16.5" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Easy Returns",
    desc: "Free 30-day returns and exchanges, no questions asked.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="20" cy="20" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
        <path d="M14 17 H24 C26.7614 17 29 19.2386 29 22 C29 24.7614 26.7614 27 24 27 H18" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M18 13 L14 17 L18 21" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Free Shipping",
    desc: "Complimentary delivery on every order, no minimum spend.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="20" cy="20" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
        <path d="M9 15 H22 V25 H9 Z" fill="#e5e7eb" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M22 18 H27 L31 22 V25 H22 Z" fill="#e5e7eb" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="15" cy="27" r="2" fill="#f9fafb" stroke="#111827" strokeWidth="1.4" />
        <circle cx="26" cy="27" r="2" fill="#f9fafb" stroke="#111827" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Secure Payments",
    desc: "Bank-grade encryption keeps every transaction fully protected.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="20" cy="20" r="18" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
        <rect x="12" y="18" width="16" height="11" rx="1.5" fill="#e5e7eb" stroke="#111827" strokeWidth="1.5" />
        <path d="M15.5 18 V15 C15.5 12.5 17.5 10.5 20 10.5 C22.5 10.5 24.5 12.5 24.5 15 V18" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="20" cy="23" r="1.6" fill="#111827" />
      </svg>
    ),
  },
];

export default function ProductFeatures() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-4 bg-white border border-gray-100 px-5 py-5 sm:px-6 sm:py-6 hover:border-gray-900 transition-colors"
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-wide mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}