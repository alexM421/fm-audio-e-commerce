import React from "react"
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
//components
import Button from "../../shared/Button/Button"
import CartButton from "../../components/CartButton/CartButton"
//contexts
import { useCartContext } from "../../contexts/CartContext"

type otherProductType = {
    slug: string,
    name: string,
    image: {
        mobile: string,
        tablet: string,
        desktop: string,
    }
}

export default function ProductPage ():JSX.Element {

    const { slug } = useParams<{ slug?: string }>()
    const { data }  = useDataContext()

    const productData: Product|undefined = data.find((product: Product): boolean => product.slug === slug)
    if(!productData){
        throw new Error("Product Data is undefined. Could not find matching slug.")
    }

    const [itemCount, setItemCount] = React.useState<number>(1)
    const { setCart } = useCartContext()
    const handleAddCart = () => {
        setItemCount(1)
        setCart(prevCart => {
            if(!prevCart[productData.slug]){
                return {
                      ...prevCart,
                    [productData.slug]: {
                        count: itemCount,
                        itemData: productData,
                    }
                }
            }else{
                return {
                    ...prevCart,
                    [productData.slug]: {
                        ...prevCart[productData.slug],
                        count: prevCart[productData.slug].count + itemCount
                    }
                }
            }
        })
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
                            <CartButton count={itemCount} setCount={setItemCount} variant="large"></CartButton>
                            <Button onClick={handleAddCart}>ADD TO CART</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["product-desc"]}>
                <div>
                    <h2>FEATURES</h2>
                    <p style={{ whiteSpace: "pre-wrap"}}>{productData.features}</p>
                </div>
                <div>
                    <h2>IN THE BOX</h2>
                    <div className={styles["product-box"]}>
                        {productData.includes.map((boxItem: {quantity: number, item: string}, index: number) => 
                            <div className={styles["product-box-item"]} key={`product-box-item-${index+1}`}>
                                <p>{`${boxItem.quantity}x`}</p>
                                <p>{boxItem.item}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles["product-gallery"]}>
                <div>
                    <img src={productData.gallery.first.desktop}/>
                    <img src={productData.gallery.second.desktop}/>
                </div>
                <img src={productData.gallery.third.desktop}/>
            </div>
            <div className={styles["product-others"]}>
                <h2>YOU MAY ALSO LIKE</h2>
                <div>
                    {productData.others.map((other: otherProductType, index: number):JSX.Element => {

                        const match: RegExpMatchArray|null = other.slug.match(/(earphones|headphones|speaker)/)
                        if(!match){
                            throw new Error("No match found for other data item, not a valid product?")
                        }
                        const slug: string = `/${match[0]==="speaker"? "speakers":match[0]}/${other.slug}`

                        return(
                            <div key={`other-${index+1}`}>
                                <img src={other.image.desktop} alt={`${other.name} image`}/>
                                <h3>{other.name}</h3>
                                <Button link={slug}>SEE PRODUCT</Button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <CategoryLinks/>
            <BrandDesc/>
        </div>
    )
}