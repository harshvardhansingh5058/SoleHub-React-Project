// WomenPage.jsx
// Desktop-first layout. max-w-7xl container throughout.
// No Header. No Footer. No Routing.
// Tailwind CSS only. UI only.

import WomenBanner from "./WomenBanner";
import WomenCategories from "./WomenCategories";
import PopularPicks from "./PopularPicks";
import PromoCards from "./PromoCards";
import FeatureHighlights from "./FeatureHighlights";
import Newsletter from "./Newsletter";

export default function WomenPage() {
  return (
    <main className="w-full bg-white font-sans">
      {/* 1 — Full-width hero banner */}
      <WomenBanner />

      {/* 2 — Category icon navigation row */}
      <WomenCategories />

      {/* 3 — 4-column popular picks grid */}
      <PopularPicks />

      {/* 4 — Two large horizontal promo banners */}
      <PromoCards />

      {/* 5 — Dark full-width feature strip */}
      <FeatureHighlights />

      {/* 6 — Full-width newsletter with form */}
      <Newsletter />
    </main>
  );
}