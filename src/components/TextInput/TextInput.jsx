import React from "react";
import styles from "./TextInput.module.css"

export default function TextInput ( { name, inputDetails }) {

    const { inputType, inputPlaceholder, inputPattern } = inputDetails


    return(
        <div className={styles.container}>
            <p className={styles.legend}>{name}</p>
            <input 
            className={styles.input}
            type={inputType}
            placeholder={inputPlaceholder}
            pattern={inputPattern}
            />
        </div>
    )
}