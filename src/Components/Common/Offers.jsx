import React from "react";

import Cardbanner1 from "../../assets/images/card-banner1.jpg";
import Cardbanner2 from "../../assets/images/card-banner2.jpg";
import Cardbanner3 from "../../assets/images/card-banner3.jpg";

import { ArrowRight } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      id: 1,
      image: Cardbanner1,
      title: "New Arrivals\nJust Landed!",
      description: "",
      button: "Explore Now",
      dark: true,
    },
    {
      id: 2,
      image: Cardbanner2,
      title: "Up to\n40% OFF",
      description: "On Best Selling Styles",
      button: "Shop Now",
      dark: false,
    },
    {
      id: 3,
      image: Cardbanner3,
      title: "Member Exclusive\nExtra 10% Off",
      description: "(For All Orders)",
      button: "Join Now",
      dark: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative overflow-hidden rounded-3xl h-64 group"
          >
            {/* Background */}
            <img
              src={offer.image}
              alt={offer.title}
              className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 ${
                offer.dark
                  ? "bg-black/35"
                  : "bg-gradient-to-r from-white/90 via-white/60 to-transparent"
              }`}
            />

            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col h-full justify-center">
              <h2
                className={`text-3xl font-bold whitespace-pre-line ${
                  offer.dark ? "text-white" : "text-black"
                }`}
              >
                {offer.title}
              </h2>

              {offer.description && (
                <p
                  className={`mt-2 ${
                    offer.dark ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  {offer.description}
                </p>
              )}

              <div className="mt-6">
                <button className="px-5 py-2.5 rounded-lg bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition cursor-pointer">
                  {offer.button}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}