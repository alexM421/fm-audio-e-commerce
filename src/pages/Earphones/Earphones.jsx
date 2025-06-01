import React from "react";
import shared from "../Shared.module.css"

import Branding from "../../layouts/Branding/Branding";
import ShopItemCard from "../../components/ShopItemCard/ShopItemCard";
import ItemCard from "../../components/ItemCard/ItemCard";

export default function Earphones () {


    return(
        <div className={shared.container}>
            <h1 className={`${shared.title} header-2`}>Earphones</h1>
            <div className={shared.main}>
                <ItemCard
                    isNew={true}
                    itemParameters={{
                        itemName: "earphones",
                        itemVersion: "YX1 Wireless",
                        itemDescription: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
                        itemImage: "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
                    }}
                />
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
        </div>
    )
}