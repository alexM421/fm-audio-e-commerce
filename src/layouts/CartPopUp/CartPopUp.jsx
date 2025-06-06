import React  from "react";
import styles from "./CartPopUp.module.css"
import Button from "../../components/Button/Button";
import { Link } from "react-router";
import { useCartContext } from "../../context/CartContext";
import { createPortal } from "react-dom"
import Data from "../../data.json"
import ArticleButton from "../../components/ArticleButton/ArticleButton";

export default function CartPopUp ( { ref }) {

    const { articles, setArticles } =  useCartContext()
    const [cartSize, setCartSize] = React.useState(0)
        

    const handleDisplayItems = () => {

        const toReturn = []



        for(let slug in articles.articles){
            //Get item Data
            const index = Data.findIndex(dataElement => dataElement.slug === slug)
            const itemData = Data[index]

            if(!articles.articles[slug]){
                continue
            }

            const setItemNumber = (updateFunc) => {

                setArticles(prevArticles => {


                    return(
                        {
                            ...prevArticles,
                            articles: {
                                ...prevArticles.articles,
                                [slug]: updateFunc(prevArticles.articles[slug])
                            }
                        }
                    )
                })
            }

            toReturn.push(
                <div className={styles.article}>
                    <img src={itemData.image.desktop}/>
                    <div className={styles["article-infos"]}>
                        <h1 className="body-text">XX99 MK II</h1>
                        <p className="subtitle">${itemData.price.toLocaleString("en-US")}</p>
                    </div>
                    <ArticleButton variant="small" setItemNumber={setItemNumber} itemNumber={articles.articles[slug]}/>
                </div>
            )
        }

        return toReturn
    }

    React.useEffect(() => {
        setArticles(prevArticles => {

            let total = 0

            if(!prevArticles.articles){
                return {...prevArticles}
            }

            for(let slug in prevArticles.articles){
                 //Get item Data
                const index = Data.findIndex(dataElement => dataElement.slug === slug)
                const itemData = Data[index]

                total += (itemData.price*articles.articles[slug])
            }

            return {...prevArticles, total: total}
        })

        setCartSize(Object.values(articles.articles).filter(value => value).length)

    },[articles.articles]
)

    const handleRemoveAll = () => {

        setArticles(prevArticles => ({...prevArticles, articles: {}}))
    }

    return(
        <div className={styles.container} ref={ref}>
            <div className={styles.header}>
                <h1 className="header-5">{`Cart (${cartSize})`}</h1>
                <p className="body-text" onClick={handleRemoveAll}>Remove all</p>
            </div>
            <div className={styles.items}>
                {handleDisplayItems()}
            </div>
            <div className={styles.total}>
                <p className="body-text">TOTAL</p>
                <p className="header-5">{`$${articles.total.toLocaleString("en-US")}`}</p>
            </div>
            <Link to="/checkout">
                <Button>Checkout</Button>
            </Link>
            {createPortal(<div className={styles.background}></div>, document.body)}
        </div>
    )
}