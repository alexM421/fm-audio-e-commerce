//CSS
import styles from "../Checkout.module.css"
//React
import { useRef, useState } from "react"
//Shared
import TextInput from "../../../shared/TextInput/TextInput"

type CheckoutFormProps = {
    formRef: React.RefObject<HTMLFormElement | null>,
}

export default function CheckoutForm ({ formRef }: CheckoutFormProps) {

    const [paymentMethod, setPaymentMethod ] = useState<string>("e-money")
    const [formValues, setFormValues] = useState<{[key: string]: string}>(
        {
            name: "",
            email: "",
            tel: "",
            address: "",
            zip: "",
            city: "",
            country: "",
            ["e-money-num"]: "",
            pin: "",
        }
    )

    const [errors, setErrors] = useState<{[key: string]: boolean}>(
        {
            name: false,
            email: false,
            tel: false,
            address: false,
            zip: false,
            city: false,
            country: false,
            ["e-money-num"]: false,
            pin: false,
        }
    )

    const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prevFormValues => ({...prevFormValues, [e.target.name] : e.target.value }))
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formElements = e.currentTarget.elements

    }

    return(
        <form className={styles["checkout-details"]} noValidate ref={formRef} onSubmit={handleSubmit}>
            <h1>CHECKOUT</h1>
            <div className={styles["checkout-section"]}>
                <h2>Billing Details</h2>
                <div className={styles["billing-section"]}>
                    <TextInput
                        legend="Name"
                        inputAttr = {{
                            name:"name",
                            placeholder: "Alexei Ward",
                            type:"text",
                        }}
                        value={formValues.name}
                        setValue={setValue}
                    />
                    <TextInput
                        legend="Email Address"
                        inputAttr = {{
                            placeholder:"alexei@mail.com",
                            name:"email",
                            type:"email",
                        }}
                        value={formValues.email}
                        setValue={setValue}
                    />
                    <TextInput
                        legend="Phone Number"
                        inputAttr = {{
                            placeholder:"+1 202-555-0136",
                            name:"phone",
                            type:"tel",
                            pattern: "/\+?(1 \d{3}-\d{3}-\d{4})/"
                        }}
                        value={formValues.tel}
                        setValue={setValue}
                    />
                </div>
            </div>
            <div className={styles["checkout-section"]}>
                <h2>Shipping Info</h2>
                <div className={styles["shipping-section"]}>
                    <TextInput
                        legend="Address"
                        inputAttr = {{
                            placeholder:"1137 Williams Avenue",
                            name:"address",
                            type:"text",
                            pattern: ""
                        }}
                        value={formValues.address}
                        setValue={setValue}
                    />
                    <TextInput
                        legend="ZIP Code"
                        inputAttr = {{
                            placeholder:"10001",
                            name:"zip",
                            type:"number",
                            pattern: "/\d{5}/"
                        }}
                        value={formValues.tel}
                        setValue={setValue}
                    />
                    <TextInput
                        legend="City"
                        inputAttr={{
                            placeholder: "New York",
                            name: "city",
                            type: "text",
                        }}
                        value={formValues.city}
                        setValue={setValue}
                    />
                    <TextInput
                        legend="Country"
                        inputAttr={{
                            placeholder: "United States",
                            name: "country",
                            type: "text",
                        }}
                        value={formValues.country}
                        setValue={setValue}
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
                                inputAttr={{
                                    placeholder:"238521993",
                                    name: "e-money-num",
                                    type: "number",
                                    pattern: "/\d{9}/"
                                }}
                                value={formValues["e-money-num"]}
                                setValue={setValue}
                            />
                            <TextInput
                                legend="e-Money PIN"
                                inputAttr={{
                                    placeholder:"6891",
                                    name: "pin",
                                    type: "number",
                                    pattern: "/\d{4}/"
                                }}
                                value={formValues.pin}
                                setValue={setValue}
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
    )
}