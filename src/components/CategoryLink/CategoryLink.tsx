//CSS
import styles from "./CategoryLink.module.css"
//React Browser
import { Link } from "react-router-dom"
//assets
import IconArrowRight from "../../assets/IconArrowRight/IconArrowRight"
//types
import type { JSX } from "react"


type CategoryLinkProps = {
    category: string,
    imgSrc: string,
    imgAlt: string,
    link: string,
}

export default function CategoryLink ({ category, imgSrc, imgAlt, link }: CategoryLinkProps):JSX.Element {



    return(
        <div  className={styles["category-link"]}>
            <img 
                src={imgSrc}
                alt={imgAlt}
            />
            <h1>{category.toUpperCase()}</h1>
            <div>
                <p>SHOP</p>
                <IconArrowRight/>
            </div>
            <Link to={link} className={styles["category-link-bg"]}></Link>
        </div>
    )
}