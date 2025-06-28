//CSS
import styles from "./ProductPage.module.css"
//React Router
import { Link } from "react-router-dom"
//layouts
import CategoryLinks from "../../layouts/CategoryLinks/CategoryLinks"
import BrandDesc from "../../layouts/BrandDesc/BrandDesc"
//data


export default function ProductPage () {




    return(
        <div className={styles.product}>
            <div className={styles["product-main"]}>
                <Link to="../">Go Back</Link>
                <div className={styles["product-buy"]}>
                    <img src=""/>
                </div>
            </div>
            <CategoryLinks/>
            <BrandDesc/>
        </div>
    )
}