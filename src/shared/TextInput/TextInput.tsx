//CSS
import styles from "./TextInput.module.css"
//Types
import type { JSX } from "react"

type TextInputProps = {
    legend: string,
    inputAttr: {
        name?: string,
        id?: string,
        type?: string,
        required?: boolean,
        title?: string,
        pattern?: string,
        placeholder?: string,
    },
    value: string,
        setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput ({ legend, inputAttr, value, setValue }: TextInputProps):JSX.Element {



    return(
        <div className={styles["text-input"]}>
            <h3>{legend}</h3>
            <input
            {...inputAttr}
            value={value}
            onChange={setValue}
            required
            />
        </div>
    )
}