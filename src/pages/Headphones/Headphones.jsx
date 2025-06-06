import React from "react";
import shared from "../Shared.module.css"

import Branding from "../../layouts/Branding/Branding";
import ShopItemCard from "../../components/ShopItemCard/ShopItemCard";
import ItemCard from "../../components/ItemCard/ItemCard";

export default function Headphones () {


    return(
        <div className={shared.container}>
            <h1 className={`${shared.title} header-2`}>Headphones</h1>
            <div className={shared.main}>
                <ItemCard
                    isNew={true}
                    itemParameters={{
                        itemName: "XX99 Mark II Headphones",
                        itemDescription: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
                        itemImage: "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
                        itemLink: "xx99-mark-two-headphones"
                    }}
                />
                 <ItemCard
                    isNew={false}
                    itemParameters={{
                        itemName: "XX99 Mark I Headphones",
                        itemDescription: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
                        itemImage: "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
                        itemLink: "xx99-mark-one-headphones"
                    }}
                    isReverse={true}
                />
                 <ItemCard
                    isNew={false}
                    itemParameters={{
                        itemName: "XX59 Headphones",
                        itemDescription: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
                        itemImage: "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
                        itemLink: "xx59-headphones"
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