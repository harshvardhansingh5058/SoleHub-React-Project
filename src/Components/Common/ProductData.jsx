import airForce1 from "../../assets/images/MenImg/531-5319025_nike-af-1-07-lo-nike-air-force-jukebox-bg-removed.png";
import ultraboost23 from "../../assets/images/MenImg/Adidas Ultraboost-jukebox-bg-removed.png";
import adizero from "../../assets/images/MenImg/Adidasadizero-jukebox-bg-removed.png";
import runfalcon from "../../assets/images/MenImg/Adidasrunfalcon-jukebox-bg-removed.png"
import nb574 from "../../assets/images/MenImg/download (1)-jukebox-bg-removed.png";
import freshFoamX from "../../assets/images/MenImg/download (2)-jukebox-bg-removed.png";
import superstar from "../../assets/images/MenImg/download (3)-jukebox-bg-removed.png";
import suedeClassic from "../../assets/images/MenImg/download (4)-jukebox-bg-removed.png";
import reactInfinity from "../../assets/images/MenImg/download (5)-jukebox-bg-removed.png";
import nb550 from "../../assets/images/MenImg/download (6)-jukebox-bg-removed.png";
import nb990 from "../../assets/images/MenImg/new-balance-9060-jukebox-bg-removed.png";
import airMax270 from "../../assets/images/MenImg/Nike-air-max-jukebox-bg-removed.png";
import airZoomPegasus from "../../assets/images/MenImg/Nike-air-zoom-jukebox-bg-removed.png";
import revolution7 from "../../assets/images/MenImg/Nikerevolution-jukebox-bg-removed.png";
import pumaVelocityNitro from "../../assets/images/MenImg/Puma3-jukebox-bg-removed.png";
import pumaDeviateNitro from "../../assets/images/MenImg/PumaDevite-jukebox-bg-removed.png";
import pumaRSX from "../../assets/images/MenImg/PumaRsX-jukebox-bg-removed.png";
import reebokNano from "../../assets/images/MenImg/Reebok4-jukebox-bg-removed.png";
import reebokClassic from "../../assets/images/MenImg/download-jukebox-bg-removed.png";

const STANDARD_SIZES = ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"];

export const products = [
  {
    id: 1,

    // Product Identity
    brand: "Nike",
    name: "Nike Air Zoom Pegasus 40",
    category: "Running",

    // Classification
    gender: "men",
    featured: true,
    isNewArrival: false,
    onSale: true,

    // Media
    image: airZoomPegasus,
    images: [airZoomPegasus, airZoomPegasus, airZoomPegasus],

    // Product Detail Page
    description:
      "A responsive daily trainer built for everyday miles, the Pegasus 40 pairs a breathable mesh upper with reactive cushioning for a smooth, energized ride from warm-up to cool-down.",
    sizes: STANDARD_SIZES,

    // Ratings
    rating: 4.8,
    reviewCount: 1248,

    // Pricing
    price: 7999,
    originalPrice: 9999,

    // UI
    badge: "Best Seller",
    dark: true,
    isFavourite: false,
  },
  {
    id: 2,
    brand: "Nike",
    name: "Nike Air Max 270",
    category: "Lifestyle",

    gender: "men",
    featured: true,
    isNewArrival: false,
    onSale: true,

    image: airMax270,
    images: [airMax270, airMax270, airMax270],

    description:
      "The Air Max 270 turns heads with its bold silhouette and the tallest Air unit yet, delivering all-day comfort and a street-ready look for wear far beyond the gym.",
    sizes: STANDARD_SIZES,

    rating: 4.7,
    reviewCount: 982,

    price: 8999,
    originalPrice: 11999,

    badge: "Trending",
    dark: false,
    isFavourite: false,
  },
  {
    id: 3,
    brand: "Adidas",
    name: "Adidas Ultraboost 23",
    category: "Running",

    gender: "men",
    featured: true,
    isNewArrival: false,
    onSale: true,

    image: ultraboost23,
    images: [ultraboost23, ultraboost23, ultraboost23],

    description:
      "Engineered with responsive BOOST midsole cushioning and a Primeknit upper that adapts to your foot, the Ultraboost 23 is built to return energy with every stride.",
    sizes: STANDARD_SIZES,

    rating: 4.9,
    reviewCount: 1450,

    price: 10999,
    originalPrice: 13999,

    badge: "Premium",
    dark: true,
    isFavourite: false,
  },
  {
    id: 4,
    brand: "Adidas",
    name: "Adidas NMD R1 V2",
    category: "Lifestyle",

    gender: "men",
    featured: false,
    isNewArrival: false,
    onSale: true,

    image: adizero,
    images: [adizero, adizero, adizero],

    description:
      "A street-style icon, the NMD R1 V2 blends a sock-like Primeknit upper with a cushioned BOOST sole, finished with signature EVA plugs for an unmistakable look.",
    sizes: STANDARD_SIZES,

    rating: 4.5,
    reviewCount: 670,

    price: 8999,
    originalPrice: 10999,

    badge: "Popular",
    dark: false,
    isFavourite: false,
  },
  {
    id: 5,
    brand: "Puma",
    name: "Puma RS-X Bold",
    category: "Sneakers",

    gender: "men",
    featured: false,
    isNewArrival: false,
    onSale: true,

    image: pumaRSX,
    images: [pumaRSX, pumaRSX, pumaRSX],

    description:
      "Chunky, retro-inspired, and unapologetically loud, the RS-X Bold layers contrasting textures and a thick RS cushioning system for maximum comfort and standout style.",
    sizes: STANDARD_SIZES,

    rating: 4.4,
    reviewCount: 456,

    price: 6499,
    originalPrice: 8499,

    badge: "20% Off",
    dark: true,
    isFavourite: false,
  },
  {
    id: 6,
    brand: "Puma",
    name: "Puma Velocity Nitro",
    category: "Running",

    gender: "men",
    featured: false,
    isNewArrival: false,
    onSale: true,

    image: pumaVelocityNitro,
    images: [pumaVelocityNitro, pumaVelocityNitro, pumaVelocityNitro],

    description:
      "Powered by NITRO foam, the Velocity Nitro delivers a lightweight, propulsive ride designed for runners who want speed without sacrificing everyday comfort.",
    sizes: STANDARD_SIZES,

    rating: 4.5,
    reviewCount: 734,

    price: 7499,
    originalPrice: 9499,

    badge: "Sale",
    dark: true,
    isFavourite: false,
  },
  {
    id: 7,
    brand: "Reebok",
    name: "Reebok Nano X3",
    category: "Training",

    gender: "men",
    featured: false,
    isNewArrival: false,
    onSale: false,

    image: reebokNano,
    images: [reebokNano, reebokNano, reebokNano],

    description:
      "Built for the box, the Nano X3 offers a stable, supportive base for lifting paired with flexible cushioning for rope climbs, sprints, and everything in between.",
    sizes: STANDARD_SIZES,

    rating: 4.6,
    reviewCount: 432,

    price: 7499,
    originalPrice: 9499,

    badge: "Gym Pick",
    dark: false,
    isFavourite: false,
  },
  {
    id: 8,
    brand: "Reebok",
    name: "Reebok Classic Leather",
    category: "Lifestyle",

    gender: "men",
    featured: false,
    isNewArrival: false,
    onSale: true,

    image: reebokClassic,
    images: [reebokClassic, reebokClassic, reebokClassic],

    description:
      "A timeless silhouette since 1983, the Classic Leather pairs a soft leather upper with die-cut EVA midsole cushioning for understated, all-day wearable style.",
    sizes: STANDARD_SIZES,

    rating: 4.4,
    reviewCount: 889,

    price: 4999,
    originalPrice: 6499,

    badge: "Sale",
    dark: false,
    isFavourite: false,
  },
  {
    id: 9,
    brand: "New Balance",
    name: "New Balance 574 Core",
    category: "Casual",

    gender: "men",
    featured: false,
    isNewArrival: false,
    onSale: false,

    image: nb574,
    images: [nb574, nb574, nb574],

    description:
      "A New Balance staple, the 574 Core balances ENCAP midsole cushioning with a classic suede-and-mesh upper for everyday comfort that never goes out of style.",
    sizes: STANDARD_SIZES,

    rating: 4.5,
    reviewCount: 334,

    price: 5499,
    originalPrice: 6999,

    badge: "Popular",
    dark: false,
    isFavourite: false,
  },
  {
    id: 10,
    brand: "New Balance",
    name: "New Balance 990v5",
    category: "Lifestyle",

    gender: "men",
    featured: true,
    isNewArrival: false,
    onSale: false,

    image: nb990,
    images: [nb990, nb990, nb990],

    description:
      "Made in the USA, the 990v5 is a premium dad-shoe icon, combining plush ENCAP cushioning with a pigskin and mesh upper for refined, long-lasting comfort.",
    sizes: STANDARD_SIZES,

    rating: 4.8,
    reviewCount: 234,

    price: 14999,
    originalPrice: 17999,

    badge: "Premium",
    dark: true,
    isFavourite: false,
  },
  {
    id: 11,
    brand: "Nike",
    name: "Nike Air Force 1 '07",
    category: "Lifestyle",

    gender: "men",
    featured: true,
    isNewArrival: false,
    onSale: true,

    image: airForce1,
    images: [airForce1, airForce1, airForce1],

    description:
      "The shoe that started it all. The Air Force 1 '07 keeps its crisp leather upper, classic hoops design, and timeless silhouette that's owned the streets for decades.",
    sizes: STANDARD_SIZES,

    rating: 4.9,
    reviewCount: 3421,

    price: 7999,
    originalPrice: 9999,

    badge: "Icon",
    dark: true,
    isFavourite: false,
  },
  {
    id: 12,
    brand: "Nike",
    name: "Nike React Infinity Run",
    category: "Running",

    gender: "men",
    featured: false,
    isNewArrival: true,
    onSale: true,

    image: reactInfinity,
    images: [reactInfinity, reactInfinity, reactInfinity],

    description:
      "Designed to help reduce injury, the React Infinity Run offers a soft, smooth ride with a wider base and more foam underfoot for stable, dependable mileage.",
    sizes: STANDARD_SIZES,

    rating: 4.6,
    reviewCount: 765,

    price: 9499,
    originalPrice: 11499,

    badge: "New",
    dark: true,
    isFavourite: false,
  },
  {
    id: 13,
    brand: "Adidas",
    name: "Adidas Superstar Classic",
    category: "Casual",

    gender: "men",
    featured: false,
    isNewArrival: false,
    onSale: true,

    image: superstar,
    images: [superstar, superstar, superstar],

    description:
      "Instantly recognizable by its rubber shell toe, the Superstar Classic has anchored streetwear since the '70s with a leather upper built to age into your own style.",
    sizes: STANDARD_SIZES,

    rating: 4.6,
    reviewCount: 2200,

    price: 6999,
    originalPrice: 8499,

    badge: "Classic",
    dark: false,
    isFavourite: false,
  },
  {
    id: 14,
    brand: "Puma",
    name: "Puma Suede Classic XXI",
    category: "Casual",

    gender: "men",
    featured: false,
    isNewArrival: false,
    onSale: false,

    image: suedeClassic,
    images: [suedeClassic, suedeClassic, suedeClassic],

    description:
      "A low-key icon since 1968, the Suede Classic XXI brings premium suede uppers and a low-profile silhouette for laid-back style that pairs with everything.",
    sizes: STANDARD_SIZES,

    rating: 4.3,
    reviewCount: 520,

    price: 5499,
    originalPrice: 6999,

    badge: null,
    dark: false,
    isFavourite: false,
  },
  {
    id: 15,
    brand: "New Balance",
    name: "New Balance Fresh Foam X",
    category: "Running",

    gender: "men",
    featured: false,
    isNewArrival: true,
    onSale: true,

    image: freshFoamX,
    images: [freshFoamX, freshFoamX, freshFoamX],

    description:
      "Fresh Foam X delivers a plush, data-driven midsole shaped from real runner footstrike data, offering soft, stable cushioning built for long, easy-effort runs.",
    sizes: STANDARD_SIZES,

    rating: 4.7,
    reviewCount: 610,

    price: 8999,
    originalPrice: 10999,

    badge: "New Arrival",
    dark: true,
    isFavourite: false,
  },

  // ─────────────────────────────────────────────
  // Women's Products
  // ─────────────────────────────────────────────
  {
    id: 101,
    brand: "Nike",
    name: "Nike Air Zoom Bella",
    category: "Training",

    gender: "women",
    featured: true,
    isNewArrival: false,
    onSale: true,

    image: airZoomPegasus,
    images: [airZoomPegasus, airZoomPegasus, airZoomPegasus],

    description:
      "Built for studio sessions and HIIT circuits, the Air Zoom Bella pairs a snug, supportive fit with responsive cushioning for quick lateral moves and high-rep sets.",
    sizes: STANDARD_SIZES,

    rating: 4.6,
    reviewCount: 542,

    price: 6999,
    originalPrice: 8499,

    badge: "Best Seller",
    dark: true,
    isFavourite: false,
  },
  {
    id: 102,
    brand: "Nike",
    name: "Nike Motiva",
    category: "Walking",

    gender: "women",
    featured: false,
    isNewArrival: true,
    onSale: false,

    image: airMax270,
    images: [airMax270, airMax270, airMax270],

    description:
      "Designed for low-impact movement, the Motiva offers plush foam cushioning and a wide, stable base for all-day walking comfort without compromising on style.",
    sizes: STANDARD_SIZES,

    rating: 4.5,
    reviewCount: 311,

    price: 7499,
    originalPrice: 8999,

    badge: "New",
    dark: false,
    isFavourite: false,
  },
  {
    id: 103,
    brand: "Nike",
    name: "Nike Winflo",
    category: "Running",

    gender: "women",
    featured: false,
    isNewArrival: false,
    onSale: true,

    image: airZoomPegasus,
    images: [airZoomPegasus, airZoomPegasus, airZoomPegasus],

    description:
      "A dependable everyday trainer, the Winflo combines soft foam cushioning with a breathable engineered mesh upper for smooth, reliable runs mile after mile.",
    sizes: STANDARD_SIZES,

    rating: 4.4,
    reviewCount: 428,

    price: 5999,
    originalPrice: 7499,

    badge: "Sale",
    dark: false,
    isFavourite: false,
  },
  {
    id: 104,
    brand: "Adidas",
    name: "Adidas Pureboost",
    category: "Running",

    gender: "women",
    featured: true,
    isNewArrival: false,
    onSale: true,

    image: ultraboost23,
    images: [ultraboost23, ultraboost23, ultraboost23],

    description:
      "Pureboost wraps the foot in a sock-like knit upper and rides on full-length BOOST cushioning, delivering a flexible, energized feel built for daily training.",
    sizes: STANDARD_SIZES,

    rating: 4.7,
    reviewCount: 689,

    price: 9499,
    originalPrice: 11499,

    badge: "Premium",
    dark: true,
    isFavourite: false,
  },
  {
    id: 105,
    brand: "Adidas",
    name: "Adidas Duramo SL",
    category: "Running",

    gender: "women",
    featured: false,
    isNewArrival: false,
    onSale: false,

    image: runfalcon,
    images: [runfalcon, runfalcon, runfalcon],

    description:
      "Light, simple, and dependable, the Duramo SL offers cushioned comfort and a breathable mesh upper for everyday runs and casual wear alike.",
    sizes: STANDARD_SIZES,

    rating: 4.3,
    reviewCount: 256,

    price: 4499,
    originalPrice: 5499,

    badge: null,
    dark: false,
    isFavourite: false,
  },
  {
    id: 106,
    brand: "Adidas",
    name: "Adidas Cloudfoam",
    category: "Lifestyle",

    gender: "women",
    featured: false,
    isNewArrival: false,
    onSale: true,

    image: adizero,
    images: [adizero, adizero, adizero],

    description:
      "Soft Cloudfoam cushioning meets a clean, minimal silhouette in this everyday lifestyle sneaker, made for casual comfort that goes with everything.",
    sizes: STANDARD_SIZES,

    rating: 4.5,
    reviewCount: 397,

    price: 4999,
    originalPrice: 6499,

    badge: "Sale",
    dark: false,
    isFavourite: false,
  },
  {
    id: 107,
    brand: "Puma",
    name: "Puma Carina",
    category: "Casual",

    gender: "women",
    featured: false,
    isNewArrival: false,
    onSale: false,

    image: pumaRSX,
    images: [pumaRSX, pumaRSX, pumaRSX],

    description:
      "A street-style staple, the Carina features a clean leather-look upper and a sporty platform sole for everyday outfits that need an easy sneaker.",
    sizes: STANDARD_SIZES,

    rating: 4.4,
    reviewCount: 612,

    price: 5499,
    originalPrice: 6499,

    badge: "Popular",
    dark: false,
    isFavourite: false,
  },
  {
    id: 108,
    brand: "Puma",
    name: "Puma Softride",
    category: "Walking",

    gender: "women",
    featured: false,
    isNewArrival: true,
    onSale: false,

    image: pumaVelocityNitro,
    images: [pumaVelocityNitro, pumaVelocityNitro, pumaVelocityNitro],

    description:
      "SoftRide foam delivers a smooth heel-to-toe transition, making this silhouette an easy pick for long walks, errands, and light all-day wear.",
    sizes: STANDARD_SIZES,

    rating: 4.5,
    reviewCount: 218,

    price: 6499,
    originalPrice: 7999,

    badge: "New Arrival",
    dark: true,
    isFavourite: false,
  },
  {
    id: 109,
    brand: "Puma",
    name: "Puma Karmen",
    category: "Lifestyle",

    gender: "women",
    featured: true,
    isNewArrival: false,
    onSale: true,

    image: pumaDeviateNitro,
    images: [pumaDeviateNitro, pumaDeviateNitro, pumaDeviateNitro],

    description:
      "Karmen brings a sleek, fashion-forward profile with a chunky sole and bold color blocking, designed to stand out as much on the street as in the gym.",
    sizes: STANDARD_SIZES,

    rating: 4.6,
    reviewCount: 489,

    price: 5999,
    originalPrice: 7499,

    badge: "Trending",
    dark: true,
    isFavourite: false,
  },
  {
    id: 110,
    brand: "Reebok",
    name: "Reebok Energen",
    category: "Running",

    gender: "women",
    featured: false,
    isNewArrival: false,
    onSale: true,

    image: reebokNano,
    images: [reebokNano, reebokNano, reebokNano],

    description:
      "Energen pairs a lightweight foam midsole with a breathable knit upper, built to keep pace through tempo runs and everyday training sessions alike.",
    sizes: STANDARD_SIZES,

    rating: 4.4,
    reviewCount: 304,

    price: 5499,
    originalPrice: 6999,

    badge: "Sale",
    dark: false,
    isFavourite: false,
  },
  {
    id: 111,
    brand: "Reebok",
    name: "Reebok Princess",
    category: "Casual",

    gender: "women",
    featured: false,
    isNewArrival: false,
    onSale: false,

    image: reebokClassic,
    images: [reebokClassic, reebokClassic, reebokClassic],

    description:
      "A retro court classic, the Princess keeps things simple with a clean leather upper and a low-profile cupsole that pairs effortlessly with any casual fit.",
    sizes: STANDARD_SIZES,

    rating: 4.3,
    reviewCount: 745,

    price: 3999,
    originalPrice: 4999,

    badge: "Classic",
    dark: false,
    isFavourite: false,
  },
  {
    id: 112,
    brand: "New Balance",
    name: "New Balance 327",
    category: "Lifestyle",

    gender: "women",
    featured: true,
    isNewArrival: false,
    onSale: true,

    image: nb574,
    images: [nb574, nb574, nb574],

    description:
      "Inspired by '70s and '80s running silhouettes, the 327 features an exaggerated N logo and oversized tongue branding for a bold retro-future look.",
    sizes: STANDARD_SIZES,

    rating: 4.6,
    reviewCount: 367,

    price: 7499,
    originalPrice: 8999,

    badge: "Trending",
    dark: false,
    isFavourite: false,
  },
  {
    id: 113,
    brand: "New Balance",
    name: "New Balance Fresh Foam Arishi",
    category: "Running",

    gender: "women",
    featured: false,
    isNewArrival: false,
    onSale: false,

    image: freshFoamX,
    images: [freshFoamX, freshFoamX, freshFoamX],

    description:
      "An accessible entry into Fresh Foam cushioning, the Arishi offers a soft, full-length midsole and breathable mesh upper for comfortable everyday runs.",
    sizes: STANDARD_SIZES,

    rating: 4.4,
    reviewCount: 289,

    price: 5499,
    originalPrice: 6499,

    badge: null,
    dark: true,
    isFavourite: false,
  },
  {
    id: 114,
    brand: "New Balance",
    name: "New Balance FuelCell Propel",
    category: "Running",

    gender: "women",
    featured: false,
    isNewArrival: true,
    onSale: true,

    image: nb990,
    images: [nb990, nb990, nb990],

    description:
      "FuelCell Propel uses a responsive, energy-returning midsole to power tempo runs and speed days, wrapped in a snug, supportive engineered upper.",
    sizes: STANDARD_SIZES,

    rating: 4.5,
    reviewCount: 198,

    price: 7999,
    originalPrice: 9499,

    badge: "New",
    dark: true,
    isFavourite: false,
  },
  {
    id: 115,
    brand: "New Balance",
    name: "New Balance 550",
    category: "Casual",

    gender: "women",
    featured: false,
    isNewArrival: false,
    onSale: true,

    image: nb550,
    images: [nb550, nb550, nb550],

    description:
      "A reissued '80s basketball silhouette, the 550 brings premium leather panels and a chunky cupsole to off-court, everyday streetwear styling.",
    sizes: STANDARD_SIZES,

    rating: 4.5,
    reviewCount: 423,

    price: 6499,
    originalPrice: 7999,

    badge: "Popular",
    dark: false,
    isFavourite: false,
  },
];