'use client'

// import { SessionProvider } from 'next-auth/react'
import { createContext, useState, ReactNode, useEffect  } from 'react';

export const CartContext = createContext({
    cartProducts: [],
    setCartProducts: () => {},
    addToCart: () => {},
    clearCart: () => {},
    removeCartProduct: () => {}
});

export function AppProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    const ls = typeof window !== 'undefined' ? window.localStorage: null;

    useEffect(() => {
        if (ls && ls.getItem('cart')){
            setCartProducts(JSON.parse(ls.getItem('cart')))
        }
    }, [])

    function clearCart () {
        setCartProducts([]);
        saveCartProductToLocalStorage([]);
    }

    function removeCartProduct (indexToRemove) {
        setCartProducts(prevCartProducts => {
            const newCartProducts = prevCartProducts.filter((v, index) => index !== indexToRemove)
            saveCartProductToLocalStorage(newCartProducts);
            return newCartProducts;
        });
    }

    function saveCartProductToLocalStorage(cartProducts) {
        if(ls){
            ls.setItem('cart', JSON.stringify(cartProducts))
        }
    }

    function addToCart (product, size=null, extras=[]) {
        setCartProducts(prevProducts => {
            const cartProduct = {...product, size, extras};
            const newProducts = [...prevProducts, cartProduct];
            saveCartProductToLocalStorage(newProducts);
            return newProducts;
        });

    }

    return (
        // <SessionProvider>
            <CartContext.Provider value={{
                cartProducts, setCartProducts, addToCart, clearCart, removeCartProduct
            }}>
                {children}
            </CartContext.Provider>
        // </SessionProvider>
    );
}