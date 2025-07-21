//CSS
import styles from "../Checkout.module.css"
//types
import type { JSX } from "react"
//contexts
import { useCartContext } from "../../../contexts/CartContext"


export default function CheckoutItemDisplay ():JSX.Element {

    const { cart } = useCartContext()

    const cartArr: (JSX.Element|null)[] = Object.values(cart).map((cartItem): JSX.Element|null => {
    
        const { price, name, image } = cartItem.itemData

        function removeAudioKeywords(input: string): string {
        // Regex to match whole words: headphones, earphones, or speaker (case-insensitive)
        const regex = /\b(headphones|earphones|speaker)\b/gi;
        // Replace matched words with empty string, and trim extra spaces
        return input.replace(regex, '').replace(/\s{2,}/g, ' ').trim();
        }

        if(cartItem.count>0){
            return(
                <div className={styles["summary-item"]} key={`summary-item-${name}`}>
                    <div>
                        <img src={image.desktop}/>
                        <div>
                            <h1>{removeAudioKeywords(name)}</h1>
                            <p>{`$ ${price.toLocaleString("en-US")}`}</p>
                        </div>
                    </div>                   
                    <p>{`x${cartItem.count}`}</p>
                </div>
            )
        }else{
            return null
        }
    })

    return (
        <div className={styles["summary-items"]}>
            {cartArr}
        </div>
    )
    
}