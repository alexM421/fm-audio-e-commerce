//CSS
import styles from "./ProductPage.module.css"
//React Router
import { Link, useParams } from "react-router-dom"
//layouts
import CategoryLinks from "../../layouts/CategoryLinks/CategoryLinks"
import BrandDesc from "../../layouts/BrandDesc/BrandDesc"
//data
import { useDataContext } from "../../contexts/DataContext"
//types
import type { JSX } from "react"
import type { Product } from "../../types/types"
import Button from "../../shared/Button/Button"


export default function ProductPage ():JSX.Element {

    const { slug } = useParams<{ slug?: string }>()
    const { data }  = useDataContext()
    console.log(data)

    const productData: Product|undefined = data.find((product: Product): boolean => product.slug === slug)
    if(!productData){
        throw new Error("Product Data is undefined. Could not find matching slug.")
    }


    return(
        <div className={styles.product}>
            <div className={styles["product-main"]}>
                <Link to="../">Go Back</Link>
                <div className={styles["product-buy"]}>
                    <img src={productData.image.desktop}/>
                    <div>
                        {productData.new && <h2>NEW PRODUCT</h2>}
                        <h1>{productData.name}</h1>
                        <p>{productData.description}</p>
                        <p>{`$ ${productData.price}`}</p>
                        <div>
                            <Button>ADD TO CART</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["product-desc"]}>
                <div>
                    <h2>FEATURES</h2>
                    <p>{productData.features}</p>
                </div>
                <div>
                    <h2>IN THE BOX</h2>
                    <div className={styles["product-box"]}>
                        {productData.includes.map((boxItem: {quantity: number, item: string}) => 
                            <div className={styles["product-box-item"]}>
                                <p>{`${boxItem.quantity}x`}</p>
                                <p>{boxItem.item}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <CategoryLinks/>
            <BrandDesc/>
        </div>
    )
}