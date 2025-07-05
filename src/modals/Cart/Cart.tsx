//CSS
import styles from "./Cart.module.css"
//contexts
import { useCartContext } from "../../contexts/CartContext"
//types
import type { JSX } from "react"
import type { Product } from "../../types/types"
import Button from "../../shared/Button/Button"
import CartButton from "../../components/CartButton/CartButton"

type CartItem = {
        count: number,
        itemData: Product,
    }


export default function Cart ():JSX.Element {

    const { cart, setCart } = useCartContext()

    const getUniqueItemNumber = ():number => {
        
        let count: number = 0
        for(let cartItem in cart){
            cart[cartItem].count>0 && count++
        }           
        
        return count
    }

    const handleRemoveAll = ():void => {
        setCart({})
    }

    const getCartTotal = ():number => {
        return Object.values(cart).reduce((total: number, cartItem: CartItem): number => (cartItem.count) * cartItem.itemData.price + total, 0)
    }

    const handleCartItemsDisplay = ():JSX.Element => {

        const cartArr: (JSX.Element|null)[] = Object.values(cart).map((cartItem): JSX.Element|null => {
        
            const { price, name, image, slug } = cartItem.itemData

            function removeAudioKeywords(input: string): string {
            // Regex to match whole words: headphones, earphones, or speaker (case-insensitive)
            const regex = /\b(headphones|earphones|speaker)\b/gi;

            // Replace matched words with empty string, and trim extra spaces
            return input.replace(regex, '').replace(/\s{2,}/g, ' ').trim();
            }

            const setItemCount = (callback: (prevCount: number) => number):void => {
                setCart(prevCart => {
                    return {
                        ...prevCart,
                        [slug]: {
                            ...prevCart[slug],
                            count: callback(prevCart[slug].count)
                        }
                    }
                })
            }

            if(cartItem.count>0){
                return(
                    <div className={styles["cart-item"]}>
                        <div>
                            <img src={image.desktop}/>
                            <div>
                                <h1>{removeAudioKeywords(name)}</h1>
                                <p>{`$ ${price}`}</p>
                            </div>
                        </div>                   
                        <CartButton count={cartItem.count} setCount={setItemCount} variant="small"/>     
                    </div>
                )
            }else{
                return null
            }
        })

        return (
            <div className={styles["cart-content"]}>
                {cartArr}
            </div>
        )
    }

    return(
        <>
            <div className={styles.background}></div>
            <div className={styles.cart}>
                <div className={styles["cart-header"]}>
                    <h1>{`Cart (${getUniqueItemNumber()})`}</h1>
                    <button onClick={handleRemoveAll}>Remove all</button>
                </div>
                {handleCartItemsDisplay()}
                <div className={styles["cart-total"]}>
                    <div>
                        <p>TOTAL</p>
                        <h2>${getCartTotal()}</h2>
                    </div>
                    <Button>CHECKOUT</Button>
                </div>
            </div>
        </>
    )
}
