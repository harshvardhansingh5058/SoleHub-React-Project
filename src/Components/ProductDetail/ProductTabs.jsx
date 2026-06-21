// ProductTabs.jsx
// UI only — static dummy content, no API/backend.
// Design language matches SoleHub: black/white/gray palette, sharp corners,
// bold uppercase tracked labels.

import { useState } from "react";

const TABS = ["Description", "Specifications", "Reviews"];

const dummyContent = {
  Description: {
    paragraphs: [
      "Built for runners who refuse to slow down, the Air Zoom Pegasus 41 pairs responsive cushioning with a breathable engineered mesh upper. Every detail is tuned for daily training, from the first warm-up mile to race day.",
      "A redesigned foam midsole returns energy with every stride, while the secure heel cradle keeps you locked in through tempo runs and sprints alike. Lightweight, durable, and ready for whatever the road throws at you.",
    ],
    bullets: [
      "Engineered mesh upper for targeted breathability",
      "Responsive foam midsole tuned for daily mileage",
      "Durable rubber outsole with multi-surface traction",
    ],
  },
  Specifications: [
    { label: "Brand", value: "Nike" },
    { label: "Model", value: "Air Zoom Pegasus 41" },
    { label: "Upper Material", value: "Engineered mesh" },
    { label: "Sole Material", value: "Rubber" },
    { label: "Closure Type", value: "Lace-up" },
    { label: "Weight", value: "265g (UK 8)" },
    { label: "Available Sizes", value: "UK 6 – UK 11" },
    { label: "Country of Origin", value: "Vietnam" },
  ],
  Reviews: {
    summary: { average: 4.6, count: 482 },
    breakdown: [
      { stars: 5, percent: 68 },
      { stars: 4, percent: 22 },
      { stars: 3, percent: 7 },
      { stars: 2, percent: 2 },
      { stars: 1, percent: 1 },
    ],
    list: [
      {
        name: "Aarav M.",
        rating: 5,
        date: "2 weeks ago",
        text: "Best daily trainer I've owned. Lightweight, breathable, and the cushioning holds up well past 10k.",
      },
      {
        name: "Sneha R.",
        rating: 4,
        date: "1 month ago",
        text: "Great fit true to size. Slightly firm out of the box but breaks in nicely after a few runs.",
      },
      {
        name: "Kabir D.",
        rating: 5,
        date: "1 month ago",
        text: "Switched from a competitor brand and this is noticeably more comfortable for long runs.",
      },
    ],
  },
};

function StarRow({ rating, size = "w-4 h-4" }) {
  return (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={size}
          fill={i < rating ? "#111827" : "none"}
          stroke="#111827"
          strokeWidth="1"
        >
          <path
            strokeLinejoin="round"
            d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85L10 1.5z"
          />
        </svg>
      ))}
    </div>
  );
}

function DescriptionPanel() {
  const { paragraphs, bullets } = dummyContent.Description;
  return (
    <div className="max-w-3xl">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm text-gray-500 leading-relaxed mb-4">
          {p}
        </p>
      ))}
      <ul className="mt-6 space-y-2.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-700">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SpecificationsPanel() {
  return (
    <div className="max-w-2xl divide-y divide-gray-100 border-t border-gray-100">
      {dummyContent.Specifications.map((spec) => (
        <div
          key={spec.label}
          className="flex items-center justify-between py-3.5"
        >
          <span className="text-sm text-gray-500">{spec.label}</span>
          <span className="text-sm font-bold text-gray-900">{spec.value}</span>
        </div>
      ))}
    </div>
  );
}

function ReviewsPanel() {
  const { summary, breakdown, list } = dummyContent.Reviews;
  return (
    <div>
      {/* Summary */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pb-8 mb-8 border-b border-gray-100">
        <div className="flex flex-col items-start">
          <span className="text-5xl font-black text-gray-900 tracking-tight">
            {summary.average}
          </span>
          <StarRow rating={Math.round(summary.average)} size="w-5 h-5" />
          <span className="text-xs text-gray-400 mt-2">
            Based on {summary.count} reviews
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-2 max-w-xs">
          {breakdown.map((row) => (
            <div key={row.stars} className="flex items-center gap-3">
              <span className="text-xs text-gray-500 w-10">{row.stars} star</span>
              <div className="flex-1 h-1.5 bg-gray-100 overflow-hidden">
                <div
                  className="h-full bg-gray-900"
                  style={{ width: `${row.percent}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 w-8 text-right">
                {row.percent}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual reviews */}
      <div className="space-y-6">
        {list.map((review, i) => (
          <div key={i} className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-bold text-gray-900">{review.name}</span>
              <span className="text-xs text-gray-400">{review.date}</span>
            </div>
            <StarRow rating={review.rating} />
            <p className="text-sm text-gray-500 leading-relaxed mt-2.5">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab bar */}
        <div className="flex items-center gap-2 sm:gap-3 border-b border-gray-100 mb-8 sm:mb-10 overflow-x-auto">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                aria-pressed={isActive}
                className={`flex-shrink-0 text-xs sm:text-sm font-bold uppercase tracking-widest px-5 sm:px-6 py-3.5 transition-colors ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-white text-gray-400 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div>
          {activeTab === "Description" && <DescriptionPanel />}
          {activeTab === "Specifications" && <SpecificationsPanel />}
          {activeTab === "Reviews" && <ReviewsPanel />}
        </div>
      </div>
    </section>
  );
}