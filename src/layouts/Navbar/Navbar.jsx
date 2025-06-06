import React from "react";
import styles from "./Navbar.module.css"
import IconCart from "../../svg/IconCart";

import { Link, useLocation, useParams, useSearchParams } from "react-router";
import CartPopUp from "../CartPopUp/CartPopUp";

export default function Navbar () {
    
    const popUpRef = React.useRef(null)
    const IconCartRef = React.useRef(null)

    const [scrolled,setScrolled] = React.useState(false)
    const [isCartShown, setIsCartShown] = React.useState(false)
    
    //Make it so the navbar is transparent before any scroll
    //Useful for Home
    React.useEffect(() => { 
        const handleScroll = () => {
            setScrolled(window.scrollY>10)
        }
        
        window.addEventListener("scroll",handleScroll)

        return () => window.removeEventListener("scroll",handleScroll)
        
    },[])

    //If on a proudctPage, then use standard navbar
    const  { slug } = useParams()
    const location = useLocation()
    const isCheckout = location.pathname === "/checkout"

    //Cart PopUp State 
    

    const handleCartPopUpDisplay = () => {
        setIsCartShown(prevState => !prevState)
    }

    React.useEffect(() => {

        const handleClickOutside = (e) => {
            console.log(popUpRef)
            if(popUpRef.current && !popUpRef.current.contains(e.target) && !IconCartRef.current.contains(e.target) ){
                console.log("Working")
                setIsCartShown(false)
            }
        }

        document.addEventListener("mousedown",handleClickOutside)

        return () => document.removeEventListener("mousedown", handleClickOutside)

    },[])

    return(
        <div className={`${styles.container} ${scrolled||slug||isCheckout? styles.scrolled:""}`}>
            <div className={styles.navbar}>
                <img src="/assets/shared/desktop/logo.svg"/>
                <div className={`${styles["nav-items"]} subtitle`}>
                    <Link to="/">Home</Link>
                    <Link to="/headphones">Headphone</Link>
                    <Link to="/speakers">Speakers</Link>
                    <Link to="/earphones">Earphones</Link>
                </div>
                <IconCart onClick={handleCartPopUpDisplay} ref={IconCartRef}/>
                {isCartShown?
                    <>
                        <CartPopUp ref={popUpRef}/>
                    </>
                    :""
                }
            </div>
        </div>
    )
}