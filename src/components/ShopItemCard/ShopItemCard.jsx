import React from "react";
import styles from "./ShopItemCard.module.css"
import Button from "../Button/Button";
import { Link } from "react-router";
import IconArrowRight from "../../svg/IconArrowRight";

export default function ShopItemCard ( { imageRef, linkInfo }) {


    const { link, category } = linkInfo

    return(
        <Link to={link} className={styles.container}>
            <Button variant="tertiary">
                <div className={styles.content}>
                    <img src={imageRef}/>
                    <div className={styles.description}>
                        <h1 className="header-6">{category}</h1>
                        <div className={styles.btn}>
                            <p>Shop</p>
                            <IconArrowRight/>
                        </div>
                    </div>
                </div>
            </Button>
        </Link>
    )
}