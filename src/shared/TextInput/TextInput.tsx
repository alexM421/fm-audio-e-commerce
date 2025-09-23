//CSS
import styles from "./TextInput.module.css"
//Types
import type { JSX, RefObject } from "react"

type TextInputProps = {
    legend: string,
    inputAttr: {
        name?: string,
        id?: string,
        type?: string,
        pattern?: string,
        placeholder?: string,
    },
    error: boolean,
    value: string,
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    ref?: RefObject<HTMLInputElement | null>
}

export default function TextInput ({ legend, inputAttr={pattern: ""}, error, value, setValue, ref }: TextInputProps):JSX.Element {

    return(
        <div className={`${styles["text-input"]} ${error? styles.err:""}`}>
            <div>
                <h3>{legend}</h3>
                {error && <p>Wrong format</p>}
            </div>
            <input
            {...inputAttr}
            value={value}
            onChange={setValue}
            required
            ref={ref}
            />
        </div>
    )
}