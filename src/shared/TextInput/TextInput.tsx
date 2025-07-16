//CSS
import styles from "./TextInput.module.css"
//Types
import type { JSX } from "react"

type TextInputProps = {
    legend: string,
    placeholder: string,
}

export default function TextInput ({ legend, placeholder }: TextInputProps):JSX.Element {



    return(
        <div className={styles["text-input"]}>
            <h3>{legend}</h3>
            <input
            placeholder={placeholder}
            />
        </div>
    )
}