//CSS
import styles from "../Checkout.module.css"
//React
import { useState } from "react"
//Shared
import TextInput from "../../../shared/TextInput/TextInput"

type CheckoutFormProps = {
    formRef: React.RefObject<HTMLFormElement | null>,
    setIsOrderConfirmed: ( value: boolean | ((prevState: boolean) => boolean)) => void
}

type errorsObj = {
    [key: string]: boolean,
}

export default function CheckoutForm ({ formRef, setIsOrderConfirmed }: CheckoutFormProps) {

    const [paymentMethod, setPaymentMethod ] = useState<string>("e-money")
    const [formValues, setFormValues] = useState<{[key: string]: string}>(
        {
            name: "",
            email: "",
            phone: "",
            address: "",
            zip: "",
            city: "",
            country: "",
            ["e-money-num"]: "",
            pin: "",
        }
    )

    const [errors, setErrors] = useState<errorsObj>(
        {
            name: false,
            email: false,
            phone: false,
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
    //alternative for easy phone input
    const setPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prevFormValues => {

            const inputValue = e.target.value
            const inputArr = inputValue.split("")
            const lastInput = inputArr[inputArr.length-1]
            const isValid =  inputArr.length===1
                ? lastInput==="+" || Number(lastInput)
                : Number(lastInput)
            if(!isValid || inputArr.length>15){
                inputArr.pop()
            }

            const updatedInputArr = inputArr
                .filter(element => Number(element) || element==="+")
                .flatMap((element, index) => {
                    if(index===0 && element!=="+") return ["+",element]
                    if(index===2) return [" ",element]
                    else if([5,8].includes(index)) return ["-",element]
                    else return element
                })

            return {
                ...prevFormValues, 
                phone : updatedInputArr.join("")
            }
        })
    }
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formElements = e.currentTarget.elements
        const tempErrors: errorsObj = {
            name: false,
            email: false,
            phone: false,
            address: false,
            zip: false,
            city: false,
            country: false,
            ["e-money-num"]: false,
            pin: false,
        }


        for(let error in tempErrors){
            const element = formElements.namedItem(error) as HTMLInputElement| null
            if(element){
                tempErrors[error] = !element.validity.valid
            }
        }

        if(Object.values(tempErrors).every(error => !error)){
            setIsOrderConfirmed(true)
        }
        setErrors(tempErrors)
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
                        error={errors.name}
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
                        error={errors.email}
                        value={formValues.email}
                        setValue={setValue}
                    />
                    <TextInput
                        legend="Phone Number"
                        inputAttr = {{
                            placeholder:"+1 202-555-0136",
                            name:"phone",
                            type:"tel",
                            pattern: "\\+?(1\\s\\d{3}-\\d{3}-\\d{4})"
                        }}
                        error={errors.phone}
                        value={formValues.phone}
                        setValue={setPhoneNumber}
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
                    
                        }}
                        error={errors.address}
                        value={formValues.address}
                        setValue={setValue}
                    />
                    <TextInput
                        legend="ZIP Code"
                        inputAttr = {{
                            placeholder:"10001",
                            name:"zip",
                            type:"text",
                            pattern: "^\\d{5}$"
                        }}
                        error={errors.zip}
                        value={formValues.zip}
                        setValue={setValue}
                    />
                    <TextInput
                        legend="City"
                        inputAttr={{
                            placeholder: "New York",
                            name: "city",
                            type: "text",
                        }}
                        error={errors.city}
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
                        error={errors.country}
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
                                    type: "text",
                                    pattern: "\\d{9}"
                                }}
                                error={errors["e-money-num"]}
                                value={formValues["e-money-num"]}
                                setValue={setValue}
                            />
                            <TextInput
                                legend="e-Money PIN"
                                inputAttr={{
                                    placeholder:"6891",
                                    name: "pin",
                                    type: "text",
                                    pattern: "\\d{4}"
                                }}
                                error={errors.pin}
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