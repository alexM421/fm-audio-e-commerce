import React from "react";
import styles from "./ItemCard.module.css"
import Button from "../Button/Button";

export default function ItemCard ( { isNew, itemParameters = {}, isReverse=false }) {

    const { itemName, itemVersion, itemDescription, itemImage } = itemParameters

    return(
        <div className={styles.container} style={{flexDirection: isReverse?"row-reverse":"row"}}>
            <img src={itemImage}/>
            <div className={styles.description}>
                {isNew? <p className={`${styles.new} overline`}>New product</p>:""}
                <h1 className="header-2">{itemVersion}<br/>{itemName}</h1>
                <p className="body-text">{itemDescription}</p>
                <Button variant="primary">See product</Button>
            </div>
        </div>
    )
}