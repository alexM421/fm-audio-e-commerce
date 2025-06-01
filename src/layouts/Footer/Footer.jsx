import React from "react";
import styles from "./Footer.module.css"
import IconFacebook from "../../svg/IconFacebook";
import IconInstragram from "../../svg/IconInstagram";
import IconTwitter from "../../svg/IconTwitter";

export default function Footer () {




    return(
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.nav}>
                    <img src="/assets/shared/desktop/logo.svg"/>
                    <div className={`${styles["nav-items"]} subtitle`}>
                        <p>Home</p>
                        <p>Headphone</p>
                        <p>Speakers</p>
                        <p>Earphones</p>
                    </div>
                </div>
                <div className={styles.desc}>
                    <p className="body-text">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <div className={styles.socials}>
                        <IconFacebook/>
                        <IconInstragram/>
                        <IconTwitter/>
                    </div>
               </div>
                <p className="body-text">Copyright 2021. All Rights Reserved</p>
            </div>
        </div>
    )
}