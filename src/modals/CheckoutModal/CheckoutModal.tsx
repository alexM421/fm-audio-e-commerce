//CSS
import styles from "./CheckoutModal.module.css"
//shared
import Button from "../../shared/Button/Button"
//contexts
import { useCartContext } from "../../contexts/CartContext"
//react
import { useState, type JSX } from "react"



type CheckoutModalProps = {
    grandTotal: number,
}

export default function CheckoutModal ({ grandTotal }:CheckoutModalProps) {


    const { cart, setCart } = useCartContext()
    const [isFullCartShown, setIsFullCartShown] = useState<boolean>(false)

    const handleSummaryItemsDisplay = ():JSX.Element| null => {
        
        function removeAudioKeywords(input: string): string {
            // Regex to match whole words: headphones, earphones, or speaker (case-insensitive)
            const regex = /\b(headphones|earphones|speaker)\b/gi;
            // Replace matched words with empty string, and trim extra spaces
            return input.replace(regex, '').replace(/\s{2,}/g, ' ').trim();
        }

        if(!Object.values(cart)[0]){
            return null
        }
  
        if(!isFullCartShown){

            const { price, image, name }  = Object.values(cart)[0].itemData

            return(
                <div className={styles["summary-item"]} key={`summary-item-${name}`}>
                    <div>
                        <img src={image.desktop}/>
                        <div>
                            <h1>{removeAudioKeywords(name)}</h1>
                            <p>{`$ ${price.toLocaleString("en-US")}`}</p>
                        </div>
                    </div>                   
                    <p>{`x${Object.values(cart) [0].count}`}</p>
                </div>
            )
        }

        const cartArr: (JSX.Element|null)[] = Object.values(cart).map((cartItem): JSX.Element|null => {
            
                const { price, name, image } = cartItem.itemData


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

    const handleReset = ():void => {
        setCart({})
    }

    return(
        <>
            <div className={styles.background}></div>
            <div className={styles["checkout-modal"]}>
                <img src="/assets/checkout/icon-order-confirmation.svg"/>
                <h1>THANK YOU <br/>FOR YOUR ORDER</h1>
                <p>You will receive an email confirmation shortly.</p>
                <div>
                    <div className={styles["order-summary"]}>
                        {handleSummaryItemsDisplay()}
                        <hr/>
                        <button onClick={() => setIsFullCartShown(prevValue => !prevValue)}>{!isFullCartShown? "and x other item(s)":"View less"}</button>
                    </div>
                    <div className={styles["order-total"]}>
                        <div>
                            <p>GRAND TOTAL</p>
                            <p>${grandTotal.toLocaleString("en-US")}</p>
                        </div>
                    </div>
                </div>
                <Button link="/" onClick={handleReset}>BACK TO HOME</Button>
            </div>
        </>
    )
}
