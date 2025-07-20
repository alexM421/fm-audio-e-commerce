//CSS
import styles from "../Checkout.module.css"
//Shared
import Button from "../../../shared/Button/Button"
//react
import { useState } from "react"
import { createPortal } from "react-dom"
//modals
import CheckoutModal from "../../../modals/CheckoutModal/CheckoutModal"
import CheckoutItemDisplay from "./CheckoutItemDisplay"
//contexts
import { useCartContext } from "../../../contexts/CartContext"

type CheckoutSummaryProps = {
    formRef: React.RefObject<HTMLFormElement | null>
    isOrderConfirmed: boolean,
}


export default function CheckoutSummary ({ formRef, isOrderConfirmed }: CheckoutSummaryProps) {

    const { cart } = useCartContext()
    
    const handleOrderConfirmation = () => {
        formRef.current?.requestSubmit()
       
    }

    const total: number = Object.values(cart).reduce((acc, cartItem) => acc + (cartItem.count * cartItem.itemData.price),0)
    const shipping: number = total? 50:0
    const vat: number = Math.floor(total*0.2)
    const grandTotal: number = total+ vat + shipping


    return(
       
        <div className={styles["checkout-summary"]}>
            <h1>SUMMARY</h1>
            <CheckoutItemDisplay/>
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
            <Button onClick={handleOrderConfirmation}>CONTINUE & PAY</Button>

            {isOrderConfirmed && createPortal(<CheckoutModal grandTotal={grandTotal}/>, document.body)}
        </div>
    )
}