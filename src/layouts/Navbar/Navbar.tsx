//CSS
import styles from "./Navbar.module.css"
//React Router
import { Link, useParams } from "react-router-dom"
//assets
import IconCart from "../../assets/IconCart/IconCart"
//Types
import { useEffect, useState, type JSX } from "react"

export default function Navbar ():JSX.Element {

    const [isNavbarTop, setIsNavbarTop] = useState(false)
    const isProductPage: string|undefined = useParams().slug


    useEffect(() => {
        const getWindowScrollY = () => {
            setIsNavbarTop(window.scrollY<16)
        }

        window.addEventListener("scroll",getWindowScrollY)
        
        return () => window.removeEventListener("scroll", getWindowScrollY)
    },[]) 

    return(
        <div className={`${styles.navbar} ${(isNavbarTop && !isProductPage)? styles["navbar-top"]:""}`}>
            <img src="/assets/shared/desktop/logo.svg" alt="Audiophile logo"/>
            <div className={styles["navbar-items"]}>
                <Link to="/">HOME</Link>
                <Link to="/headphones">HEADPHONES</Link>
                <Link to="/speakers">SPEAKERS</Link>
                <Link to="/earphones">EARPHONES</Link>
            </div>
            <IconCart/>
            <hr/>
        </div>
    )
}