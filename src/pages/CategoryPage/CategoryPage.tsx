//CSS
import styles from "./CategoryPage.module.css"
//layouts
import BrandDesc from "../../layouts/BrandDesc/BrandDesc"
import ShopItemLinks from "../../layouts/CategoryLinks/CategoryLinks"
//React Router
import { useParams } from "react-router-dom"
//contexts
import { useDataContext } from "../../contexts/DataContext"
//Data
import type { JSX } from "react"
import ProductItemLink from "../../components/ProductItemLink/ProductItemLink"
//types
import type { Product } from "../../types/types"


export default function CategoryPage ():JSX.Element {

    const Data: Product[] = useDataContext().data

    const category: string | undefined = useParams().category
    const categoryItems: Product[] = Data.filter(item => item.category=== category)
    const categoryItemsDisplay: JSX.Element[] = categoryItems.map((categoryItem, index) => 
        <ProductItemLink 
            productInfo={categoryItem} 
            isReversed={index%2===1}
            key={`product-link-${categoryItem.id}`}
            />)


    return(
        <div className={styles["category-page"]}>
            <p>{category?.toUpperCase()}</p>
            <div className={styles["category-page-main"]}>
                <div className={styles["category-page-products"]}>
                    {categoryItemsDisplay}
                </div>
                <ShopItemLinks/>
                <BrandDesc/>
            </div>
        </div>
    )
}