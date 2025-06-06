 import React from "react";
import shared from "../Shared.module.css"

import Branding from "../../layouts/Branding/Branding";
import ShopItemCard from "../../components/ShopItemCard/ShopItemCard";
import ItemCard from "../../components/ItemCard/ItemCard";

export default function Speakers () {


    return(
        <div className={shared.container}>
            <h1 className={`${shared.title} header-2`}>Speakers</h1>
            <div className={shared.main}>
                <ItemCard
                    isNew={true}
                    itemParameters={{
                        itemName: "ZX9 Speaker",
                        itemDescription: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
                        itemImage: "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
                        itemLink: "zx9-speaker"
                    }}
                />
                 <ItemCard
                    isNew={false}
                    itemParameters={{
                        itemName: "ZX7 Speaker",
                        itemDescription: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
                        itemImage: "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
                        itemLink: "zx7-speaker"
                    }}
                    isReverse={true}
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