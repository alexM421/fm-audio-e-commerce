//CSS
import styles from "./CartButton.module.css"
//types
import type { JSX } from "react"

type CartButtonProps = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    variant: string,
}

export default function CartButton ({ count, setCount, variant="large" }: CartButtonProps):JSX.Element {

    const incrementCount = (): void => {
        if(count<9){
            setCount((prevCount): number => prevCount+1)
        }
    }

    const decrementCount = (): void => {
        if(count>0){
            setCount((prevCount): number => prevCount-1)
        }
    }

    return(
        <div className={`${styles["cart-btn"]} ${variant==="small"? styles["cart-btn-sm"]:""}`}>
            <button onClick={decrementCount}>-</button>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}