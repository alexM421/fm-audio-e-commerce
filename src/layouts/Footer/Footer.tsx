//CSS
import styles from "./Footer.module.css"
//React Router
import { Link } from "react-router-dom"
//assets
import IconFacebook from "../../assets/IconFacebook/IconFacebook"
import IconInstagram from "../../assets/IconInstagram/IconInstagram"
import IconTwitter from "../../assets/IconTwitter/IconTwitter"

export default function Footer () {



    return(
        <div className={styles.footer}>
            <div className={styles["footer-orange-thing"]}></div>
            <div className={styles["footer-title"]}>
                <img src="/assets/shared/desktop/logo.svg"/>
                <div className={styles["footer-nav"]}>
                    <Link to="/">HOME</Link>
                    <Link to="/headphones">HEADPHONES</Link>
                    <Link to="/speakers">SPEAKERS</Link>
                    <Link to="/earphones">EARPHONES</Link>
                </div>
            </div>
            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <div className={styles["footer-copy"]}>
                <p>Copyright 2021. All Rights Reserved</p>
                <div className={styles["footer-socials"]}>
                    <IconFacebook/>
                    <IconInstagram/>
                    <IconTwitter/>
                </div>
            </div>
        </div>
    )
}