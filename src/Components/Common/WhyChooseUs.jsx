import React from "react";
import {
    ShieldCheck,
    RotateCcw,
    Truck,
    Wallet,
    Headphones,
} from "lucide-react";

export default function WhyChooseUs({ 
    variant = "light", 
    title = "Why Shop With SoleHub?",
    features: customFeatures = null 
}) {
    const defaultFeatures = [
        {
            id: 1,
            icon: ShieldCheck,
            title: "100% Authentic",
            desc: "Genuine products from top brands",
        },
        {
            id: 2,
            icon: RotateCcw,
            title: "Easy Returns",
            desc: "Hassle-free returns within 7 days",
        },
        {
            id: 3,
            icon: Truck,
            title: "Free Shipping",
            desc: "Free delivery on orders above ₹999",
        },
        {
            id: 4,
            icon: Wallet,
            title: "Secure Payments",
            desc: "100% safe & secure checkout",
        },
        {
            id: 5,
            icon: Headphones,
            title: "Customer Support",
            desc: "We're here to help you 24/7 , Number - 91928",
        },
    ];

    const features = customFeatures || defaultFeatures;
    const isDark = variant === "dark";

    // === LIGHT VARIANT: Clean, Modern, Nike/Adidas Style ===
    const lightStyles = {
        section: "bg-white",
        title: "text-gray-950",
        card: "border border-gray-200 bg-white hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-1.5",
        iconBg: "bg-gray-50",
        iconColor: "text-gray-800",
        cardTitle: "text-gray-950",
        cardDesc: "text-gray-600",
    };

    // === DARK VARIANT: Premium Luxury Sportswear, Glassmorphism ===
    const darkStyles = {
        section: "bg-black",
        title: "text-white",
        card: "border border-gray-800/60 bg-gray-900/50 backdrop-blur-xl hover:border-gray-700/80 hover:bg-gray-900/70 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1.5",
        iconBg: "bg-gray-800/60 backdrop-blur-sm",
        iconColor: "text-white",
        cardTitle: "text-white",
        cardDesc: "text-gray-400",
    };

    const styles = isDark ? darkStyles : lightStyles;

    return (
        <section className={`${styles.section} px-4 py-16 md:py-20 transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className={`${styles.title} text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight`}>
                    {title}
                </h2>

                {/* Subtitle (optional visual breathing room) */}
                <p className={`${isDark ? "text-gray-600" : "text-gray-500"} text-center text-sm md:text-base mb-12 max-w-2xl mx-auto`}>
                    Experience shopping with confidence and premium service
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                    {features.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className={`${styles.card} rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer group`}
                            >
                                {/* Icon Container */}
                                <div className={`${styles.iconBg} w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110`}>
                                    <Icon size={28} className={styles.iconColor} strokeWidth={1.5} />
                                </div>

                                {/* Card Title */}
                                <h3 className={`${styles.cardTitle} font-semibold text-lg md:text-base mb-2 leading-tight`}>
                                    {item.title}
                                </h3>

                                {/* Card Description */}
                                <p className={`${styles.cardDesc} text-sm leading-6`}>
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}