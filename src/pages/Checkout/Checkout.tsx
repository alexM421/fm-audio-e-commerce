//CSS
import styles from "./Checkout.module.css"
//React Router
import { Link } from "react-router-dom"
//React
import { useRef, useState, type JSX } from "react"
//Checkout components
import CheckoutForm from "./CheckoutForm/CheckoutForm"
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"


export default function Checkout ():JSX.Element {

    

        
    const [isOrderConfirmed, setIsOrderConfirmed] = useState<boolean>(false)

    const formRef = useRef<HTMLFormElement>(null)

    

    return(
        <div className={styles.checkout}>

            <Link to="/">Go Back</Link>
            <div className={styles["checkout-main"]}>
                <CheckoutForm formRef={formRef}/>
                <CheckoutSummary isOrderConfirmed={isOrderConfirmed} formRef={formRef}/>
            </div>
        </div>
    )
}