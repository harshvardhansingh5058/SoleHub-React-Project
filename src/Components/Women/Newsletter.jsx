// Newsletter.jsx
const perks = [
  { label: "Early Access", desc: "Shop new drops before anyone else" },
  { label: "Members-Only Sales", desc: "Up to 40% off for subscribers" },
  { label: "Style Updates", desc: "Weekly curation sent to your inbox" },
];

export default function Newsletter() {
  return (
    <section className="w-full bg-white border-t border-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column: text left, form right (stacks on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

          {/* Left */}
          <div className="text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">
              SoleHub Inner Circle
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-5">
              The first to know.<br />The first to shop.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0">
              Join our community and get exclusive deals, early access to new collections, and curated style inspiration delivered straight to your inbox.
            </p>

            {/* Perks */}
            <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0 text-left">
              {perks.map((perk) => (
                <div key={perk.label} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{perk.label}</p>
                    <p className="text-xs text-gray-500">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="bg-black p-6 sm:p-10 lg:p-12">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Subscribe Now</h3>
              <p className="text-sm text-gray-400">No spam. Unsubscribe anytime. Your privacy is safe with us.</p>
            </div>

            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="w-full bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 outline-none focus:border-white transition-colors placeholder-gray-600"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 outline-none focus:border-white transition-colors placeholder-gray-600"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full bg-zinc-900 border border-zinc-700 text-white text-sm px-4 py-3 outline-none focus:border-white transition-colors placeholder-gray-600"
              />
            </div>

            {/* Submit */}
            <button className="w-full bg-white hover:bg-gray-100 transition-colors text-gray-900 text-sm font-black uppercase tracking-widest py-4">
              Join the Inner Circle
            </button>

            <p className="text-[10px] text-gray-600 text-center mt-4">
              By subscribing you agree to our Privacy Policy. Cancel at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}