import { ArrowRight } from "lucide-react";

import nikeLogo from "../../assets/images/nike-logo.webp";
import adidasLogo from "../../assets/images/adidas-logo.png";
import pumaLogo from "../../assets/images/puma-logo.webp";
import reebokLogo from "../../assets/images/reebok-logo.webp";
import newBalanceLogo from "../../assets/images/newbalance-logo.png";
import asicsLogo from "../../assets/images/asics.png";

const brands = [
  {
    id: 1,
    name: "Nike",
    logo: nikeLogo,
    tagline: "Just Do It.",
  },
  {
    id: 2,
    name: "Adidas",
    logo: adidasLogo,
    tagline: "Impossible Is Nothing.",
  },
  {
    id: 3,
    name: "Puma",
    logo: pumaLogo,
    tagline: "Forever Faster.",
  },
  {
    id: 4,
    name: "Reebok",
    logo: reebokLogo,
    tagline: "Be More Human.",
  },
  {
    id: 5,
    name: "New Balance",
    logo: newBalanceLogo,
    tagline: "Run Your Way.",
  },
  {
    id: 6,
    name: "Asics",
    logo: asicsLogo,
    tagline: "Sound Mind, Sound Body.",
  },
];

function BrandCard({ brand }) {
  return (
    <div
      className="
        group
        bg-white
        border
        border-gray-200
        rounded-xl
        p-8
        flex
        flex-col
        items-center
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="
          h-16
          sm:h-20
          object-contain
          mb-6
          transition-transform
          duration-300
          group-hover:scale-105
        "
      />

      <p className="text-gray-500 text-sm mb-6">
        {brand.tagline}
      </p>

      <button
        className="
          flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-black
          transition-all
          duration-300
          group-hover:gap-3
        "
      >
        Explore
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            All Brands
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {brands.map((brand) => (
            <BrandCard
              key={brand.id}
              brand={brand}
            />
          ))}
        </div>
      </div>
    </section>
  );
}