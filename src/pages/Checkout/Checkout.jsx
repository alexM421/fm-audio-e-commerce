import React from "react";
import styles from "./Checkout.module.css"

import { Link } from "react-router";

import TextInput from "../../components/TextInput/TextInput";

export default function Checkout () {

    const [isCashOnDelivery, setIsCashOnDeliver] = React.useState(false)

    return(
        <div className={styles.container}>
            <Link to=".." className="body-text">Go Back</Link>
            <div className={styles.main}>
                <form className={styles.checkout}>
                    <h1 className="header-3">Checkout</h1>
                    <div className={styles.category}>
                        <p className="subtitle">Billing Details</p>
                        <div className={styles.items}>
                            <TextInput
                                name="Name"
                                inputDetails={{
                                    inputType:"text",
                                    inputPlaceholder: "Alexei Ward",
                                }}
                            />
                            <TextInput
                                name="Email Address"
                                inputDetails={{
                                    inputType:"email",
                                    inputPlaceholder: "alexei@mail.com",
                                }}
                            />
                            <TextInput
                                name="Phone Number"
                                inputDetails={{
                                    inputType:"tel",
                                    inputPlaceholder: "+1 202-555-0136",
                                    inputPattern : "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.category}>
                        <p className="subtitle">Shipping Info</p>
                        <div className={styles.items}>
                            <TextInput
                                name="Address"
                                inputDetails={{
                                    inputType:"text",
                                    inputPlaceholder: "1137 Williams Avenue",
                                }}
                            />
                            <TextInput
                                name="Email Address"
                                inputDetails={{
                                    inputType:"ZIP Code",
                                    inputPlaceholder: "10001",
                                }}
                            />
                            <TextInput
                                name="City"
                                inputDetails={{
                                    inputType:"text",
                                    inputPlaceholder: "New York",
                                }}
                            />
                            <TextInput
                                name="Country"
                                inputDetails={{
                                    inputType:"text",
                                    inputPlaceholder: "United States",
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.category}>
                        <p className="subtitle">Payment Details</p>
                        <div className={styles.items}>
                            {isCashOnDelivery?
                                <div className={styles.cashDelivery}>
                                    <img/>
                                    <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                                </div>
                            :
                                <>
                                    <TextInput
                                        name="Email Address"
                                        inputDetails={{
                                            inputType:"email",
                                            inputPlaceholder: "alexei@mail.com",
                                        }}
                                        />
                                    <TextInput
                                        name="Phone Number"
                                        inputDetails={{
                                            inputType:"tel",
                                            inputPlaceholder: "+1 202-555-0136",
                                            inputPattern : "[0-9]{3}-[0-9]{3}-[0-9]{4}",
                                        }}
                                        />
                                </>
                            }
                        </div>
                    </div>
                    
                </form>
                <div className={styles.summary}>

                </div>
            </div>
        </div>
    )
}