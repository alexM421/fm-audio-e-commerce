import React from "react";
import styles from "./Branding.module.css"

export default function Branding () {



    return(
        <div className={styles.container}>
            <div className={styles.description}>
                <h1 className="header-2">Bringing you the<br/><span style={{color: "var(--orange)"}}>best</span> audio gear</h1>
                <p className="body-text">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <img src="/assets/shared/desktop/image-best-gear.jpg"/>
        </div>
    )
}