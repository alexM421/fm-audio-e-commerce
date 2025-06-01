import React from "react";
import styles from "./Button.module.css"
import IconArrowRight from "../../svg/IconArrowRight";

export default function Button ( { children, variant="primary" }) {



    return(
        <button 
        className={`${styles[variant]} ${styles.button} subtitle`}
        >
            { children }
        </button>
    )
}