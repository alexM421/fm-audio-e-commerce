import React from "react";
import styles from "./ItemCard.module.css"
import Button from "../Button/Button";
import { Link } from "react-router";
import ArticleButton from "../ArticleButton/ArticleButton";
import { useCartContext } from "../../context/CartContext";

export default function ItemCard ( { variant="default",isNew, itemParameters = {}, isReverse=false }) {

    const { itemPrice, itemName, itemDescription, itemImage, itemLink, itemSlug } = itemParameters

    //Track the number of wanted Items
    const [itemNumber, setItemNumber] = React.useState(1)

    //Add to the cart the wanted items
    const { articles, setArticles } = useCartContext()

    const addToCart = () => {
        setArticles(prevArticles => {
            
            const articlesObj = {...prevArticles.articles}
            articlesObj[itemSlug] = articlesObj[itemSlug]? articlesObj[itemSlug]+itemNumber:itemNumber 
            
            return(
                {
                    ...prevArticles,
                    articles: articlesObj,
                }
            )
        })
    }

    return(
        <div className={styles.container} style={{flexDirection: isReverse?"row-reverse":"row"}}>
            <img src={itemImage}/>
            <div className={styles.description}>
                {isNew? <p className={`${styles.new} overline`}>New product</p>:""}
                <h1 className="header-2">{itemName}</h1>
                <p className="body-text">{itemDescription}</p>
                {variant==="buy"? 
                    <>
                        <p className={`header-6 ${styles.price}`}>{`$ ${itemPrice.toLocaleString('en-US')}`}</p>
                        <div className={styles["div-buy"]}>
                            <ArticleButton setItemNumber={setItemNumber} itemNumber={itemNumber}/>
                            <Button variant="primary" onClick={addToCart}>Add to cart</Button>
                        </div>
                    </>
                :
                <Button variant="primary"><Link to={itemLink}>See product</Link></Button>
                }
            </div>
        </div>
    )
}