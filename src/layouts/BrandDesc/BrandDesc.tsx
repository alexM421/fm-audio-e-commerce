//CSS
import styles from "./BrandDesc.module.css"
//Types
import type { JSX } from "react";

export default function BrandDesc ():JSX.Element {


    return(
        <div className={styles["brand-desc"]}>
            <div>
                <h1>BRINGIN YOU THE <span>BEST</span> AUDIO GEAR</h1>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <img src="/assets/shared/desktop/image-best-gear.jpg"/>
        </div>
    )
}