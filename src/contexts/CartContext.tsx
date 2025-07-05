import React from "react";
//types
import type { Product } from "../types/types";

type CartProviderProps = {
    children: React.ReactNode,
}

type Cart = {
    [productSlug: string] : {
            count: number,
            itemData: Product,
    }
}



type CartContextType = {
    cart: Cart,
    setCart: React.Dispatch<React.SetStateAction<Cart>>
}

const CartContext = React.createContext<CartContextType | undefined>(undefined)

export function CartProvider ({ children }: CartProviderProps ) {

    const [cart, setCart] = React.useState<Cart>({})

    const value = {
        cart: cart,
        setCart: setCart
    }

    return(
        <CartContext.Provider value={value}>
            { children }
        </CartContext.Provider>
    )
}

export function useCartContext () {

    const context = React.useContext(CartContext)

    if(!context){
        throw new Error("CartContext is undefined.")
    }

    return context

}