//CSS
import styles from "./HomeLayout.module.css"
//React Router
import { Outlet } from "react-router-dom"
//layouts
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function HomeLayout () {



    return(
        <div className={styles.homeLayout}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}