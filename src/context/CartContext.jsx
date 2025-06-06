import React from "react";

const CartContext = React.createContext()

export function CartProvider ( { children }) {

    const [articles, setArticles] = React.useState({
        articles: {},
        total: 0
    })

    const value={
        articles: articles,
        setArticles: setArticles
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