//react router
import { Link } from "react-router-dom"
//CSS
import styles from "./Button.module.css"
//Types
import type { JSX } from "react"



type ButtonProps = {
    children: React.ReactNode,
    link? : string,
    variant?: string,
}

export default function Button ({ children ,link, variant="primary" }: ButtonProps):JSX.Element {

    if(link){
        const linkElement: JSX.Element = 
            <Link to={link} className={`${styles.button} ${styles[variant]}`}>
                { children }
            </Link>

        return linkElement
    }
    else{
        const buttonElement: JSX.Element = 
            <button className={`${styles.button} ${styles[variant]}`}>
                { children }
            </button>

        return buttonElement    
    }


   
}