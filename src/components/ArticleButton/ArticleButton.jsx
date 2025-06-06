import React from "react";
import styles from "./ArticleButton.module.css"

export default function ArticleButton ({ itemNumber, setItemNumber,variant="normal" }) {

    const addItem = () => {
        setItemNumber(prevNum => prevNum+1)
    }

    const removeItem = () => {
        setItemNumber(prevNum => prevNum===0? prevNum:prevNum-1)
    }

    return(
        <div className={`${styles.btn} ${variant==="small"? styles.small:""}`}>
            <p className="subtitle" onClick={removeItem}>-</p>
            <p className="subtitle">{itemNumber}</p>
            <p className="subtitle" onClick={addItem}>+</p>
        </div>
    )
}