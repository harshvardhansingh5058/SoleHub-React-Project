import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  SportShoe, Search, User, ShoppingCart, Menu, X, House, Shirt, ShoppingBag, Tags, Phone, Sparkles, Tag, ChevronRight,
} from "lucide-react";

export default function Header() {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const cartCount = 3; // replace with actual cart state / context

  const navItems = [
    { id: 1, name: "Home", path: "/", icon: House },
    { id: 2, name: "Men", path: "/men", icon: Shirt },
    { id: 3, name: "Women", path: "/women", icon: ShoppingBag },
    { id: 4, name: "Brands", path: "/brands", icon: Tags },
    { id: 5, name: "New Arrivals", path: "/new-arrivals", icon: Sparkles },
    { id: 6, name: "Sale", path: "/sale", icon: Tag, sale: true },
    { id: 7, name: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <div className="sticky top-0 z-50">

      {/* ── Announcement Bar ── */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

          <p className="text-xs text-gray-300">
            🚚 Free Shipping on all orders above{" "}
            <span className="font-semibold text-white">₹2999</span>
          </p>

          <div className="hidden sm:flex items-center gap-1 text-xs text-gray-400">
            {["Track Order", "Help", "Store Locator"].map((link, i, arr) => (
              <React.Fragment key={link}>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  {link}
                </a>
                {i < arr.length - 1 && (
                  <span className="text-gray-600 mx-2">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      {/* ── Main Header ── */}
      <header className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3.5">

          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 shrink-0">
              <SportShoe size={26} className="text-black" />
              <span className="font-bold text-[1.3rem] tracking-tight text-black">
                SoleHub
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-7">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                      className={({ isActive }) => {
                        const isHov = hovered === item.id;
                        const anyHov = hovered !== null;
                        const base = "pb-1 border-b-2 text-sm transition-all duration-200";
                        // "Sale" gets bold to stand out without color
                        const weight = item.sale ? "font-bold" : "font-medium";

                        if (isHov) return `${base} ${weight} border-black text-black`;
                        if (anyHov) return `${base} ${weight} border-transparent text-gray-400`;
                        if (isActive) return `${base} ${weight} border-black text-black`;
                        return `${base} ${weight} border-transparent text-gray-600 hover:text-black`;
                      }}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Search */}
            <div className="hidden lg:flex w-[240px] items-center gap-2 bg-gray-100 border border-transparent rounded-full px-4 py-2 focus-within:border-gray-300 focus-within:bg-white transition-all duration-200">
              <Search size={15} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for shoes..."
                className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-2">

              <button
                title="Account"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <User size={20} className="text-gray-800" />
              </button>

              <button
                title="Cart"
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <ShoppingCart size={20} className="text-gray-800" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none px-0.5">
                    {cartCount}
                  </span>
                )}
              </button>

              <button className="ml-1 bg-black text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer">
                Login
              </button>

            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-1 lg:hidden">

              <button
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => { }}
              >
                <ShoppingCart size={22} className="text-gray-800" />
                {cartCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 min-w-[16px] h-[16px] bg-black text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none px-0.5">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); }}
              >
                <Search size={22} className="text-gray-800" />
              </button>

              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

            </div>
          </div>

          {/* Mobile Search Dropdown */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${searchOpen ? "max-h-16 mt-3" : "max-h-0"}`}>
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5 focus-within:bg-white focus-within:border focus-within:border-gray-300 transition-all">
              <Search size={15} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for shoes..."
                className="bg-transparent outline-none w-full text-sm placeholder:text-gray-400"
                autoFocus={searchOpen}
              />
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[600px] mt-3" : "max-h-0"}`}>
            <ul className="flex flex-col divide-y divide-gray-100">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-3 px-1 text-sm transition-colors ${item.sale
                          ? "font-bold text-black"
                          : isActive
                            ? "font-semibold text-black"
                            : "font-medium text-gray-600 hover:text-black"
                        }`
                      }
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={17} className="text-gray-400" />
                        {item.name}
                      </span>
                      <ChevronRight size={15} className="text-gray-300" />
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-gray-100 mt-3 pt-4 pb-1 flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors">
                <User size={17} />
                My Account
              </button>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all mt-3 mb-3">
              Login / Register
            </button>
          </div>

        </div>
      </header>

    </div>
  );
}