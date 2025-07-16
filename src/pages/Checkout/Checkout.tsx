//CSS
import styles from "./Checkout.module.css"
//React Router
import { Link } from "react-router-dom"
//React
import { useState, type JSX } from "react"
//Shared
import TextInput from "../../shared/TextInput/TextInput"
import Button from "../../shared/Button/Button"
//contexts
import { useCartContext } from "../../contexts/CartContext"


export default function Checkout ():JSX.Element {

    const [paymentMethod, setPaymentMethod ] = useState<string>("e-money")

    const { cart } = useCartContext()

    console.log(cart)

        const handleSummaryItemsDisplay = ():JSX.Element => {

        const cartArr: (JSX.Element|null)[] = Object.values(cart).map((cartItem): JSX.Element|null => {
        
            const { price, name, image, slug } = cartItem.itemData

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


    

    const total: number = Object.values(cart).reduce((acc, cartItem) => acc + (cartItem.count * cartItem.itemData.price),0)
    const shipping: number = total? 50:0
    const vat: number = total*0.2
    const grandTotal: number = total+ vat + shipping

    return(
        <div className={styles.checkout}>

            <Link to="/">Go Back</Link>

            <div className={styles["checkout-main"]}>
                <form className={styles["checkout-details"]}>
                    <h1>CHECKOUT</h1>
                    <div className={styles["checkout-section"]}>
                        <h2>Billing Details</h2>
                        <div className={styles["billing-section"]}>
                            <TextInput
                                legend="Name"
                                placeholder="Alexei Ward"
                            />
                            <TextInput
                                legend="Email Address"
                                placeholder="alexei@mail.com"
                            />
                            <TextInput
                                legend="Phone Number"
                                placeholder="+1 202-555-0136"
                            />
                        </div>
                    </div>
                    <div className={styles["checkout-section"]}>
                        <h2>Shipping Info</h2>
                        <div className={styles["shipping-section"]}>
                            <TextInput
                                legend="Address"
                                placeholder="1137 Williams Avenue"
                            />
                            <TextInput
                                legend="ZIP Code"
                                placeholder="10001"
                            />
                            <TextInput
                                legend="City"
                                placeholder="New York"
                            />
                            <TextInput
                                legend="Country"
                                placeholder="United States"
                            />
                        </div>
                    </div>
                    <div className={styles["checkout-section"]}>
                        <h2>Shipping Info</h2>
                        <div className={styles["payment-section"]}>
                            <div className={styles["payment-method"]}>
                                <label>
                                    <input type="radio" name="payment-method" checked={paymentMethod==="e-money"} onChange={() => setPaymentMethod("e-money")}/>
                                    <div className={styles["input-replacer"]}></div>
                                    <p>e-Money</p>
                                </label>
                                <label>
                                    <input type="radio" name="payment-method" checked={paymentMethod==="cash-on-delivery"} onChange={() => setPaymentMethod("cash-on-delivery")}/>
                                    <div className={styles["input-replacer"]}></div>
                                    <p>Cash on Delivery</p>
                                </label>
                            </div>
                            {
                                paymentMethod === "e-money"
                                ?<>
                                    <TextInput
                                        legend="e-Money Number"
                                        placeholder="238521993"
                                    />
                                    <TextInput
                                        legend="e-money PIN"
                                        placeholder="6891"
                                    />
                                </>
                                :<div className={styles["cash-on-delivery"]}>
                                    <img src="/assets/checkout/icon-cash-on-delivery.svg"/>
                                    <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                                </div>
                            }
                        </div>
                    </div>
                </form>

                <div className={styles["checkout-summary"]}>
                    <h1>SUMMARY</h1>
                    {handleSummaryItemsDisplay()}
                    <div className={styles["summary-total"]}>
                        <div>
                            <p>TOTAL</p>
                            <p>{`$${total.toLocaleString("en-US")}`}</p>
                        </div>
                        <div>
                            <p>SHIPPING</p>
                            <p>{`$${shipping.toLocaleString("en-US")}`}</p>
                        </div>
                        <div>
                            <p>VAT (INCLUDED)</p>
                            <p>{`$${vat.toLocaleString("en-US")}`}</p>
                        </div>
                        <div>
                            <p>GRAND TOTAL</p>
                            <p>{`$${grandTotal.toLocaleString("en-US")}`}</p>
                        </div>
                    </div>
                    <Button>CONTINUE & PAY</Button>
                </div>

            </div>
        </div>
    )
}