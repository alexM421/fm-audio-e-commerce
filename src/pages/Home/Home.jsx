import React from "react";
import styles from "./Home.module.css"
import shared from "../Shared.module.css"

import Button from "../../components/Button/Button";
import Branding from "../../layouts/Branding/Branding";
import ShopItemCard from "../../components/ShopItemCard/ShopItemCard";
import PatternCircle from "../../svg/PatternCircle";


export default function Home () {


    return(
        <div className={styles.container}>
            <div className={styles["hero-container"]}>
                <img src="./assets/home/desktop/image-hero.jpg"/>
                <div className={styles["hero-desc-container"]}>
                    <div className={styles.hero}>
                        <h2 className="overline">NEW PRODUCT</h2>
                        <h1 className="header-1">XX99 MARK II<br/> HEADPHONES</h1>
                        <p className="body-text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <Button>SEE PRODUCT</Button>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
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
                <div className={styles.items}>
                    <div className={styles["zx9-speaker"]}>
                        <div className={styles["image-container"]}>
                            <PatternCircle/>
                            <img src="/assets/home/desktop/image-speaker-zx9.png"/>
                        </div>
                        <div className={styles["item-desc"]}>
                            <h1 className="header-1">ZX9<br/>SPEAKER</h1>
                            <p className="body-text">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <Button 
                            variant="home-speaker"
                            >SEE PRODUCT</Button>
                        </div>
                    </div>
                    <div className={styles["zx7-speaker"]}>
                        <img src="/assets/home/desktop/image-speaker-zx7.jpg"/>
                        <div className={styles["item-desc"]}>
                            <h1 className="header-4">ZX7 SPEAKER</h1>
                            <Button 
                            variant="secondary"
                            >SEE PRODUCT</Button>
                        </div>
                    </div>
                    <div className={styles["yx1-earphones"]}>
                        <img src="/assets/home/desktop/image-earphones-yx1.jpg"/>
                        <div className={styles["item-desc"]}>
                            <h1 className="header-4">YX1 EARPHONES</h1>
                            <Button 
                            variant="secondary"
                            >SEE PRODUCT</Button>
                        </div>
                    </div>
                </div>
                <Branding/>
            </div>
        </div>
    )
}