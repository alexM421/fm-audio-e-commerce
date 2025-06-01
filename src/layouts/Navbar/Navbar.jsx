import React from "react";
import styles from "./Navbar.module.css"
import IconCart from "../../svg/IconCart";

export default function Navbar () {
    
    //Make it so the navbar is transparent before any scroll
    //Useful for Home

    const [scrolled,setScrolled] = React.useState(false)


    React.useEffect(() => { 
        const handleScroll = () => {
            setScrolled(window.scrollY>10)
        }
        
        window.addEventListener("scroll",handleScroll)

        return () => window.removeEventListener("scroll",handleScroll)
        
    },[])

    return(
        <div className={`${styles.container} ${scrolled? styles.scrolled:""}`}>
            <div className={styles.navbar}>
                <img src="/assets/shared/desktop/logo.svg"/>
                <div className={`${styles["nav-items"]} subtitle`}>
                    <p>Home</p>
                    <p>Headphone</p>
                    <p>Speakers</p>
                    <p>Earphones</p>
                </div>
                <IconCart/>
            </div>
        </div>
    )
}