//CSS
import styles from "./Navbar.module.css"
//React Router
import { Link, useLocation, useParams } from "react-router-dom"
//assets
import IconCart from "../../assets/IconCart/IconCart"
//components
import Cart from "../../modals/Cart/Cart"
//Types
import { useEffect, useRef, useState, type JSX } from "react"
//Modals
import NavModal from "../../modals/NavModal/NavModal"

export default function Navbar ():JSX.Element {

    const [isNavbarTop, setIsNavbarTop] = useState(false)
    const [displayCart, setDisplayCart] = useState(false)
    const [showNav, setShowNav] = useState(false)
    const isProductPage: string|undefined = useParams().slug

    const isCheckout = useLocation().pathname === "/checkout"

    const cartBtnRef = useRef<HTMLDivElement>(null)
    const navBtnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const getWindowScrollY = () => {
            setIsNavbarTop(window.scrollY<16)
        }

        window.addEventListener("scroll",getWindowScrollY)
        
        return () => window.removeEventListener("scroll", getWindowScrollY)
    },[]) 


    const toggleCartDisplay = ():void => {
        setDisplayCart((prevState:boolean) => !prevState)
    }

    return(
        <div className={`${styles.navbar} ${(isNavbarTop && !isProductPage &&!isCheckout)? styles["navbar-top"]:""}`}>
            <div className={styles["navbar-controls"]}>
                <button 
                    onClick={() => setShowNav(prevValue => !prevValue)}
                    ref={navBtnRef}    
                >
                    <img src="/assets/shared/tablet/icon-hamburger.svg"/>
                </button>
                <Link to="/">
                    <img src="/assets/shared/desktop/logo.svg" alt="Audiophile logo"/>
                </Link>
            </div>
            <Link to="/">
                <img src="/assets/shared/desktop/logo.svg" alt="Audiophile logo"/>
            </Link>
            <div className={styles["navbar-items"]}>
                <Link to="/">HOME</Link>
                <Link to="/headphones">HEADPHONES</Link>
                <Link to="/speakers">SPEAKERS</Link>
                <Link to="/earphones">EARPHONES</Link>
            </div>
            <div onClick={toggleCartDisplay} ref={cartBtnRef}>
                <IconCart/>
            </div>
            <hr/>
            {displayCart && <Cart setCartDisplay={setDisplayCart} cartBtnRef={cartBtnRef}/>}
            {showNav && 
            <NavModal
                buttonRef={navBtnRef}
                setShowNav={setShowNav}
            />}
        </div>
    )
}