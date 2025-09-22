//CSS
import styles from "./Home.module.css"
//Shared
import Button from "../../shared/Button/Button"
//Types
import type { JSX } from "react"
//layouts
import ShopItemLinks from "../../layouts/CategoryLinks/CategoryLinks"
import BrandDesc from "../../layouts/BrandDesc/BrandDesc"

export default function Home ():JSX.Element {

    return(
        <div className={styles.home}>
            <div className={styles["home-hero"]}>
                <picture>
                    <source
                        srcSet="/assets/home/mobile/image-header.jpg"
                        media="(max-width: 700px)"
                    />
                    <source 
                        srcSet="/assets/home/tablet/image-header.jpg"
                        media="(max-width: 1200px)"
                    />
                    <img 
                        src="/assets/home/desktop/image-hero.jpg"
                        alt="Hero image of XX99 Mark II Headphones"
                        />
                </picture>
                <div className={styles["home-hero-desc"]}>
                    <div>
                        <h2>NEW PRODUCT</h2>
                        <h1>XX99 MARK II<br/>HEADPHONES</h1>
                        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    </div>
                    <Button link="/headphones/xx99-mark-two-headphones">SEE PRODUCT</Button>
                </div>
            </div>
            <div className={styles["home-main"]}>
                <ShopItemLinks/>
                <div className={styles["home-main-grid"]}>

                    <div className={styles["home-zx9"]}>
                        <div>
                            <img src="/assets/home/desktop/image-speaker-zx9.png"/>
                            <img src="/assets/home/desktop/pattern-circles.svg"/>
                        </div>
                        <div>
                            <h1>ZX9<br/>SPEAKER</h1>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <Button link="/speakers/zx9-speaker" variant="tertiary">SEE PRODUCT</Button>
                        </div>
                    </div>

                    <div className={styles["home-zx7"]}>
                        <picture>
                            <source
                                srcSet="/assets/home/mobile/image-speaker-zx7.jpg"
                                media="(max-width: 600px)"
                            />
                            <source
                                srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
                                media="(max-width: 1000px)"
                            />
                            <img src="/assets/home/desktop/image-speaker-zx7.jpg"/>
                        </picture>
                        <div>
                            <h1>ZX7 SPEAKER</h1>
                            <Button link="/speakers/zx7-speaker" variant="secondary">SEE PRODUCT</Button>
                        </div>
                    </div>

                    <div className={styles["home-yx1"]}>
                        <picture>
                            <source
                                srcSet="/assets/home/mobile/image-earphones-yx1.jpg"
                                media="(max-width: 700px)"
                            />
                            <source
                                srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
                                media="(max-width: 1000px)"
                            />
                            <img src="/assets/home/desktop/image-earphones-yx1.jpg"/>
                        </picture>
                        <div>
                            <h1>YX1 EARPHONES</h1>
                            <Button link="/earphones/yx1-earphones" variant="secondary">SEE PRODUCT</Button>
                        </div>
                    </div>

                </div>
                <BrandDesc/>
            </div>
        </div>
    )
}