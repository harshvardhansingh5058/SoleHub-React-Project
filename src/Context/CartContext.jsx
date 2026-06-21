// CartContext.jsx
// Global cart state — single source of truth for cart data across the app.
// Wrap your app (e.g. in App.jsx / main.jsx) with <CartProvider> so any
// component can read/update the cart via the useCart() hook below.

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || [];
        } catch {
            return [];
        }
    });

    // Keep localStorage in sync whenever cart state changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Add a product to cart, or increment qty if the same product+size already exists
    const addToCart = (product, qty = 1) => {
        setCart((prevCart) => {
            const existing = prevCart.find(
                (item) => item.id === product.id && item.size === product.size
            );

            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id && item.size === product.size
                        ? { ...item, qty: (item.qty || 1) + qty }
                        : item
                );
            }

            return [...prevCart, { ...product, qty }];
        });
    };

    // Set an exact quantity for an item (used by +/- steppers)
    const updateQty = (id, size, qty) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.size === size
                    ? { ...item, qty: Math.max(1, Math.min(qty, 10)) }
                    : item
            )
        );
    };

    const incrementQty = (id, size) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.size === size
                    ? { ...item, qty: Math.min((item.qty || 1) + 1, 10) }
                    : item
            )
        );
    };

    const decrementQty = (id, size) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.size === size
                    ? { ...item, qty: Math.max((item.qty || 1) - 1, 1) }
                    : item
            )
        );
    };

    const removeFromCart = (id, size) => {
        setCart((prevCart) =>
            prevCart.filter((item) => !(item.id === id && item.size === size))
        );
    };

    const clearCart = () => setCart([]);

    // Derived values, handy for Header badge / Order Summary
    const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    const cartTotal = cart.reduce(
        (sum, item) => sum + item.price * (item.qty || 1),
        0
    );

    const value = {
        cart,
        cartCount,
        cartTotal,
        addToCart,
        updateQty,
        incrementQty,
        decrementQty,
        removeFromCart,
        clearCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}