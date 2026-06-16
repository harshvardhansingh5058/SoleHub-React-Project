import React from "react";

import {
    ShieldCheck,
    RotateCcw,
    Truck,
    Wallet,
    Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
    const features = [
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

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            <h2 className="text-4xl font-bold mb-8">
                Why Shop With SoleHub?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 transition flex items-center justify-center">



                {features.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="border border-gray-400 rounded-2xl p-6 hover:shadow-lg transition"
                        >
                            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-5">
                                <Icon size={28} />
                            </div>

                            <h3 className="font-semibold text-lg mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-6">
                                {item.desc}
                            </p>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}