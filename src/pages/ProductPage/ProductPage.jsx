import React from "react";
import { Link, useParams } from "react-router";
import styles from "./ProductPage.module.css"
import shared from "../Shared.module.css"

import Data from "../../data.json"

import ItemCard from "../../components/ItemCard/ItemCard";
import Branding from "../../layouts/Branding/Branding";
import ShopItemCard from "../../components/ShopItemCard/ShopItemCard";
import Button from "../../components/Button/Button";


export default function ProductPage () {

    //Get item Data
    const { slug } = useParams()
    const index = Data.findIndex(dataElement => dataElement.slug === slug)
    const itemData = Data[index]


    //Handle the box item list display
    const handleBoxDisplay = () => {

        const toReturn = []

        for(let included of itemData.includes){
            toReturn.push(
                <div className={styles.included}>
                    <p className="body-text">{`${included.quantity}x`}</p>
                    <p className="body-text">{included.item}</p>
                </div>
            )
        }

        return(
            <>
                {toReturn}
            </>
        )
    }

    //Handle the likes items display
    const handleLikesDisplay = () => {

        const toReturn = [];

        for(let like of itemData.others){

            const slug = like.slug
            const match = slug.match( /(headphones|speaker|earphones)/i) || ""
            let slugLink =""
            if(match[0]==="speaker"){
                slugLink = `/${match[0]}s/${slug}`
            }else{
                slugLink= `/${match[0]}/${slug}`
            }

            toReturn.push(
                <div className={styles["likes-item"]}>
                    <img src={like.image.desktop}/>
                    <h1 className="header-5">{like.name}</h1>
                    <Button><Link to={slugLink}>See Product</Link></Button> 
                </div>
            )
        }

        return(
            <div className={styles.likes}>
                <h1 className="header-3">You may also like</h1>
                <div className={styles["likes-items"]}>
                    {toReturn}
                </div>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <div>
                <Link to=".." className={`body-text`}>Go Back</Link>
                <ItemCard
                    variant="buy"
                    isNew={itemData.new}
                    itemParameters={{
                        itemPrice: itemData.price,
                        itemImage: itemData.image.desktop,
                        itemName: itemData.name,
                        itemDescription: itemData.description,
                        itemPrice: itemData.price,
                        itemSlug: itemData.slug,
                    }}
                />
            </div>
            <div className={styles["item-description"]}>
                <div className={styles.features}>
                    <h1 className="header-3">Features</h1>
                    <p className="body-text">{itemData.features}</p>
                </div>
                <div className={styles.box}>
                    <h1 className="header-3">In the box</h1>
                    {handleBoxDisplay()}
                </div>
            </div>
            <div className={styles.gallery}>
                <div className={styles["gallery-left"]}>
                    <img src={itemData.gallery.first.desktop}/>
                    <img src={itemData.gallery.second.desktop}/>
                </div>
                <img src={itemData.gallery.third.desktop}/>
            </div>
            <>
                {handleLikesDisplay()}
            </>
            <div className={shared.links}>
                <ShopItemCard
                    imageRef={"/assets/shared/desktop/image-category-thumbnail-headphones.png"}
                    linkInfo={{
                        category: "headphones",
                        link: "/headphones"
                    }}
                />
                <ShopItemCard
                    imageRef={"/assets/shared/desktop/image-category-thumbnail-speakers.png"}
                    linkInfo={{
                        category: "speakers",
                        link: "/speakers"
                    }}
                />
                <ShopItemCard
                    imageRef={"/assets/shared/desktop/image-category-thumbnail-earphones.png"}
                    linkInfo={{
                        category: "earphones",
                        link: "/earphones"
                    }}
                />
            </div>
            <Branding/>
        </div>
    )
}