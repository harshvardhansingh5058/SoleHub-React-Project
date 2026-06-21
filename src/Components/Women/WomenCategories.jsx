// WomenCategories.jsx — redesigned to match Men page category section
// Categories and click handlers are unchanged; only layout + styling updated.

const categories = [
  {
    label: "Running",
    // Replace with your own image URLs — placeholder Unsplash images used below
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&q=80",
  },
  {
    label: "Casual",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=160&q=80",
  },
  {
    label: "Sports",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=160&q=80",
  },
  {
    label: "Heels",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=160&q=80",
  },
  {
    label: "Flats",
    image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=160&q=80",
  },
  {
    label: "Sandals",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=160&q=80",
  },
  {
    label: "All",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=160&q=80",
  },
];

export default function WomenCategories() {
  return (
    // Matches Men page: light-gray section background wrapping a white card
    <section className="w-full bg-gray-50 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* White card with rounded corners + soft shadow — mirrors Men page */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-4 sm:px-6 lg:px-10 py-5 sm:py-6">
          <div className="flex items-start gap-4 sm:gap-2 lg:gap-4 overflow-x-auto sm:overflow-visible sm:justify-between snap-x snap-mandatory sm:snap-none pb-1 sm:pb-0">

            {categories.map((cat) => (
              <button
                key={cat.label}
                className="group flex flex-col items-center gap-2.5 flex-shrink-0 sm:flex-1 sm:min-w-0 snap-start"
              >
                {/* Circular image container — matches Men page circular category bubbles */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-150 flex items-center justify-center overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>

                {/* Label — same weight/color/size as Men page */}
                <span className="text-xs sm:text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors text-center leading-tight whitespace-nowrap sm:whitespace-normal">
                  {cat.label}
                </span>
              </button>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}