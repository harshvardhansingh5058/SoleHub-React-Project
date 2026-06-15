import React from "react";
import { SportShoe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white mt-16">

            <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                {/* Logo */}

                <div>

                    <div className="flex items-center gap-2">

                        <SportShoe size={28} />

                        <h2 className="text-3xl font-bold">
                            SoleHub
                        </h2>

                    </div>

                    <p className="text-gray-400 mt-5 leading-7 text-sm">
                        Your one-stop destination for premium quality shoes from top
                        brands. Style, comfort and performance — all in one place.
                    </p>

                    <div className="flex items-center gap-4 mt-6">

                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <i className="fa-brands fa-youtube"></i>
                        </a>

                    </div>

                </div>

                {/* Quick Links */}

                <div>

                    <h3 className="text-xl font-semibold mb-5">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-gray-400">

                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">Men Shoes</a></li>
                        <li><a href="#" className="hover:text-white transition">Women Shoes</a></li>
                        <li><a href="#" className="hover:text-white transition">Brands</a></li>
                        <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
                        <li><a href="#" className="hover:text-white transition">Sale</a></li>

                    </ul>

                </div>

                {/* Customer Service */}

                <div>

                    <h3 className="text-xl font-semibold mb-5">
                        Customer Service
                    </h3>

                    <ul className="space-y-3 text-gray-400">

                        <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                        <li><a href="#" className="hover:text-white transition">Shipping & Delivery</a></li>
                        <li><a href="#" className="hover:text-white transition">Returns & Exchanges</a></li>
                        <li><a href="#" className="hover:text-white transition">Size Guide</a></li>
                        <li><a href="#" className="hover:text-white transition">Track Order</a></li>
                        <li><a href="#" className="hover:text-white transition">Store Locator</a></li>

                    </ul>

                </div>

                {/* My Account */}

                <div>

                    <h3 className="text-xl font-semibold mb-5">
                        My Account
                    </h3>

                    <ul className="space-y-3 text-gray-400">

                        <li><a href="#" className="hover:text-white transition">Login / Register</a></li>
                        <li><a href="#" className="hover:text-white transition">My Orders</a></li>
                        <li><a href="#" className="hover:text-white transition">Wishlist</a></li>
                        <li><a href="#" className="hover:text-white transition">Cart</a></li>
                        <li><a href="#" className="hover:text-white transition">Profile</a></li>

                    </ul>

                </div>

                {/* Contact */}

                <div>

                    <h3 className="text-xl font-semibold mb-5">
                        Get In Touch
                    </h3>

                    <div className="space-y-5 text-gray-400">

                        <div className="flex gap-3">

                            <i className="fa-solid fa-phone mt-1"></i>

                            <div>
                                <p>+91 98765 43210</p>
                                <p className="text-sm">Mon - Sat 10 AM - 7 PM</p>
                            </div>

                        </div>

                        <div className="flex gap-3">

                            <i className="fa-solid fa-envelope mt-1"></i>

                            <div>
                                <p>support@solehub.com</p>
                                <p className="text-sm">info@solehub.com</p>
                            </div>

                        </div>

                        <div className="flex gap-3">

                            <i className="fa-solid fa-location-dot mt-1"></i>

                            <div>
                                <p>SoleHub Store Pvt. Ltd.</p>
                                <p className="text-sm">
                                    123, Fashion Street,
                                    Mumbai, Maharashtra – 400001
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Bottom */}

            <div className="border-t border-zinc-800">

                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-gray-500 text-center">
                        © 2026 SoleHub. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-gray-500">

                        <a href="#" className="hover:text-white transition">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:text-white transition">
                            Terms & Conditions
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}