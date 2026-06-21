import React from 'react'
import CartHero from '../Components/Cart/CartHero'
import CartItems from '../Components/Cart/CartItems'
import OrderSummary from '../Components/Cart/OrderSummary'
import EmptyCart from '../Components/Cart/EmptyCart'

export default function Cart() {
    const cartItems =
        JSON.parse(localStorage.getItem("cart")) || [];
    return (
        <>
            <CartHero  cartItems={cartItems} />

            {cartItems.length > 0 ? (
                <>
                    <CartItems  cartItems={cartItems} />
                    <OrderSummary  cartItems={cartItems} />
                </>
            ) : (
                <EmptyCart />
            )}
        </>
    );
}
