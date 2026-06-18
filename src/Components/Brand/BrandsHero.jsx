import { ArrowRight } from "lucide-react";
import brandsBanner from "../../assets/images/BrandsHero.png"

export default function BrandsHero() {
  return (
    <section className="">
      <div
        className="
          relative
          h-[220px]
          sm:h-[280px]
          md:h-[340px]
          lg:h-[580px]
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${brandsBanner})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-xl px-6 sm:px-10 lg:px-14">
            <h1
              className="
                text-white
                font-bold
                leading-tight
                text-3xl
                sm:text-4xl
                lg:text-5xl
              "
            >
              Top Brands.
              <br />
              Trusted Quality.
            </h1>

            <p
              className="
                mt-4
                max-w-sm
                text-sm
                sm:text-base
                text-gray-200
              "
            >
              Explore shoes from the world's best brands.
            </p>

            <button
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-white/40
                bg-black/20
                px-5
                py-3
                text-sm
                font-medium
                text-white
                backdrop-blur-sm
                transition-all
                hover:bg-white
                hover:text-black
              "
            >
              Explore All Brands
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}