//CSS
import styles from "./ProductItemLink.module.css" 
//types
import type { JSX } from "react"
import type { Product } from "../../types/types"
//shared
import Button from "../../shared/Button/Button"

type ProductItemLinkProps = {
    productInfo: Product,
    isReversed: boolean
}

export default function ProductItemLink ({ productInfo, isReversed }:ProductItemLinkProps):JSX.Element {

    const categoryImage:string = productInfo.categoryImage.desktop
    const isNew: boolean = productInfo.new
    const name: string = productInfo.name
    const description: string = productInfo.description
    const slug: string = productInfo.slug

    return(
        <div className={styles["product-item-link"]} style={isReversed? {flexDirection: "row-reverse"}:{}}>
            <img src={categoryImage}/>
            <div>
                {isNew && <h2>NEW PRODUCT</h2>}
                <h1>{name.toUpperCase()}</h1>
                <p>{description}</p>
                <Button link={slug}>SEE PRODUCT</Button>
            </div>
        </div>
    )
}